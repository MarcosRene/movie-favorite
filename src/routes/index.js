import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AddMovie from '../pages/AddMovie';
import Favorites from '../pages/Favorites';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={AddMovie} />
			<Route path="/favorites" component={Favorites} />
		</Switch>
	);
}
