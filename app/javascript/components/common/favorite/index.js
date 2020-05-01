import React, { Fragment, useState } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import FavoritesService from '../../../services/favorites';
import { store } from 'react-notifications-component';
var _ = require('lodash');

const Favorite = (props) => {
  const [favored, setFavored] = useState(props.favored);

  let FavoredButton;
  if(favored) {
    FavoredButton = <FaHeart size='25px' className='has-text-white' onClick={() => disfavor()}/>
  } else {
    FavoredButton = <FaRegHeart size='25px' className='has-text-white' onClick={() => favor()}/>
  }

  const notification = (msg, type) => {
    store.addNotification({
      title: `${_.capitalize(props.kind.slice(0, -1))}: ${props.title}`,
      message: msg,
      type: type,
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "flipInX"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: false,
        showIcon: true,
        pauseOnHover: true

      },
      isMobile: true,
      breakpoint: 200
    });
  }

  async function disfavor() {
    await FavoritesService.delete(props.kind, props.id);
    setFavored(false);
    notification('Removido dos favoritos com sucesso!', 'danger')
  }

  async function favor() {
    await FavoritesService.create(props.kind, props.id);
    setFavored(true);
    notification('Adicionado aos favoritos com sucesso!', 'success')
  }

  return (
  <Fragment>
    { FavoredButton }
  </Fragment>
);
}

export default Favorite;