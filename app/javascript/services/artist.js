import Api from './api';

const ArtistService = {
  show: (id) => Api.get(`/artists/${id}`)
}

export default ArtistService;