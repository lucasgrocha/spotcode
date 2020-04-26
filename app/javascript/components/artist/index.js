import React, { Fragment, useState, useEffect } from 'react';
import { Heading, Columns, Image } from 'react-bulma-components';
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components';
import ArtistService from '../../services/artist'
import Musics from '../musics';
import Album from '../common/album'

const DivVSpaced = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`

const Artist = (props) => {
  let { id } = useParams()
  const [artist, setArtist] = useState([]);
  const [albums, setAlbums] = useState([]);

  async function fetchArtist() {
    const response = await ArtistService.show(id)
    setArtist(response.data)
    setAlbums(response.data['albums'])
  }

  useEffect(() => {
    fetchArtist();
  }, [])

  const artistAlbums = albums.map((album, key) =>
    <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
      <Album artist_name={album.artist_name} title={album.title} cover_url={album.cover_url} key={key} id={album.id} />
    </Columns.Column>
  );

  return (
    <Fragment>
      <Columns className='is-vcentered is-mobile is-centered'>
        <Columns.Column desktop={{ size: 3 }} className='has-text-centered'>
          <Image src={artist.photo_url} className='image is-square' />
          <DivVSpaced>
            <Heading size={6} className='has-text-white'>{artist.name}</Heading>
          </DivVSpaced>
        </Columns.Column>
      </Columns>
      <Columns className='is-mobile'>
        { artistAlbums }
      </Columns>
      <Musics songs={artist['songs'] || []} />
    </Fragment>
  );
}
export default Artist;