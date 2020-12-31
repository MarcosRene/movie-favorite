import React, { useState } from 'react';
import api from '../../services/api';

import publicApi from '../../utils/constants';

import Container from '../../components/Container';
import Movie from '../../components/Movie';

import { Content, MovieInfo } from './styles';

export default function AddMovie() {
	const [movies, setMovies] = useState('');
	const [results, setResults] = useState([]);

	async function handleSubmit(e) {
		e.preventDefault();

		const response = await api.get(
			`search/movie?api_key=${publicApi}&query=${movies}`
		);

		const { results } = response.data;
		results ? setResults(results) : setResults([]);
	}

	function handleSearch(e) {
		const search = e.target.value;
		setMovies(search);
	}

	return (
		<Container>
			<Content>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Search for a movie"
						value={movies}
						onChange={handleSearch}
					/>
				</form>

				{results.length !== 0 && (
					<MovieInfo>
						{results.map((movie) => (
							<li key={movie.id}>
								<Movie movie={movie} />
							</li>
						))}
					</MovieInfo>
				)}
			</Content>
		</Container>
	);
}
