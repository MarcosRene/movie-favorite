export const INITIAL_STATE = {
	favorites: localStorage.getItem('favorites')
		? JSON.parse(localStorage.getItem('favorites'))
		: [],
};
//actions types
export const ActionsType = {
	Add: 'ADD_MOVIE_TO_FAVORITES',
	Remove: 'REMOVE_MOVIE_FROM_FAVORITES',
};

const useReducerFavorite = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ActionsType.Add:
			return {
				...state,
				favorites: [action.payload, ...state.favorites],
			};
		case ActionsType.Remove:
			return {
				...state,
				favorites: state.favorites.filter(
					(movie) => movie.id !== action.payload
				),
			};
		default:
			return state;
	}
};

export default useReducerFavorite;
