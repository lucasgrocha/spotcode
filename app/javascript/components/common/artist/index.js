import React, {Fragment} from 'react';
import styled from 'styled-components';
import { Image, Heading } from 'react-bulma-components';
import { Link } from 'react-router-dom'

const DivVSpaced = styled.div`
  margin-top: 10px;
`

const Artist = (props) => {
  console.log(props)
  return(
    <Link to={`api/v1/artists/${props.id}`}>
      <Image src={props.photo_url} className='image is-square' />
      <DivVSpaced>
        <Heading size={6} className='has-text-white'>{props.name}</Heading>
      </DivVSpaced>
  </Link>
  );
}
export default Artist;