import React from 'react';

import Container from '../../components/Container';
import Favorite from '../../components/Favorite';

import { Grid } from './styles';

import { useFavorite } from '../../context/useFavorite';

export default function Favorites() {
	const { favorites } = useFavorite();

	return (
		<Container>
			<Grid>
				{favorites.map((movie) => (
					<li key={movie.id}>
						<Favorite movie={movie} />
					</li>
				))}
			</Grid>
		</Container>
	);
}
