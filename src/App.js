import React from 'react';
import { BrowserRouter as Browser } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';

import Header from './components/Header';

import Routes from './routes';
import theme from './styles/theme';
import { FavoriteProvider } from './context/useFavorite';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Browser>
				<FavoriteProvider>
					<GlobalStyle />
					<Header />
					<Routes />
				</FavoriteProvider>
			</Browser>
		</ThemeProvider>
	);
}

export default App;
