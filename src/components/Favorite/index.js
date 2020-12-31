import React from 'react';
import { FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { useFavorite } from '../../context/useFavorite';

import Spinner from '../Spinner';

import { Container, Content } from './styles';

export default function Favorite({ movie }) {
  const { removeMovieFavorites } = useFavorite();

  return (
    <Container>
      <Content>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={`${movie.title}`}
          />
        ) : (
          <Spinner />
        )}

        <button onClick={() => removeMovieFavorites(movie.id)}>
          Remove
          <FaTrash color="#F8F8F1" size={16} />
        </button>
      </Content>
    </Container>
  );
}

Favorite.propTypes = {
  movie: PropTypes.object.isRequired,
};
