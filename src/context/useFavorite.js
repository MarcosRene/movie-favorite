import React, { useEffect, useReducer, createContext, useContext } from 'react';
import useReducerFavorite, {
	INITIAL_STATE,
	ActionsType,
} from './useReducerFavorite';

const FavoriteContext = createContext(INITIAL_STATE);

export const FavoriteProvider = ({ children }) => {
	const [state, dispatch] = useReducer(useReducerFavorite, INITIAL_STATE);

	useEffect(() => {
		localStorage.setItem('favorites', JSON.stringify(state.favorites));
	}, [state]);

	const addMovieFavorites = (movie) => {
		dispatch({ type: ActionsType.Add, payload: movie });
	};

	const removeMovieFavorites = (id) => {
		dispatch({ type: ActionsType.Remove, payload: id });
	};

	return (
		<FavoriteContext.Provider
			value={{
				favorites: state.favorites,
				addMovieFavorites,
				removeMovieFavorites,
			}}
		>
			{children}
		</FavoriteContext.Provider>
	);
};

export function useFavorite() {
	const context = useContext(FavoriteContext);

	if (!context) {
		throw new Error('useFavorite must be used within an FavoriteProvider');
	}

	return context;
}
