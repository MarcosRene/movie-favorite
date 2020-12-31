import React from 'react';
import { FaHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';
import {
	Container,
	Content,
	Infos,
	Favorite,
	Title,
	Date,
	Overview,
} from './styles';

import { useFavorite } from '../../context/useFavorite';

export default function Movie({ movie }) {
	const { addMovieFavorites, favorites } = useFavorite();

	const verifyId = favorites.find((old) => old.id === movie.id);

	const disableButton = verifyId ? true : false;

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

				<Infos>
					<div>
						<Title>{movie.title}</Title>
						<Date>{movie.release_date}</Date>
						<Overview>{movie.overview}</Overview>
					</div>

					<Favorite>
						<button
							disabled={disableButton}
							onClick={() => addMovieFavorites(movie)}
						>
							Add to favorite
							<FaHeart color="#F8F8F1" size={16} />
						</button>
					</Favorite>
				</Infos>
			</Content>
		</Container>
	);
}

Movie.propTypes = {
	movie: PropTypes.object.isRequired,
};
