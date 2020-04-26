json.id @artist.id
json.name @artist.name
json.photo_url url_for(@artist.photo)
json.favorite current_user.is_favorite? 'Artist', @artist.id

json.albums @albums.each do |album|
  json.id album.id
  json.name album.title
  json.cover_url url_for(album.cover)
end

json.songs @songs.each do |song|
  json.id song.id
  json.title song.title
  json.file_url url_for(song.file)
  json.artist_name song.album.artist.name
  json.album_id song.album.id
  json.favorite current_user.is_favorite? 'Song', song.id
end
