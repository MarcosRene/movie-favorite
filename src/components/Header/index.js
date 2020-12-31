import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

export default function Header() {
	return (
		<Container>
			<Content>
				<nav>
					<Link to="/favorites">Favorites</Link>
					<Link className="btn" to="/">
						Add
					</Link>
				</nav>
			</Content>
		</Container>
	);
}
