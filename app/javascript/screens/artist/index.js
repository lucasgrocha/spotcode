import React, { Fragment } from 'react';
import NavbarFooter from '../../components/common/navbar_footer'
import Artist from '../../components/artist'
import SectionWrapper from '../../components/common/section_wrapper'

const ArtistScreen = _ => {
  return(
    <Fragment>
      <SectionWrapper>
        <Artist />
        <NavbarFooter />
      </SectionWrapper>
    </Fragment>
  )
}

export default ArtistScreen;