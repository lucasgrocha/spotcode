class Api::V1::ArtistsController < ApplicationController
  def index
  end

  def show
    @artist = Artist.find(params[:id])
    @albums = @artist.albums
    @songs = @albums.map(&:songs).flatten!
  end
end
