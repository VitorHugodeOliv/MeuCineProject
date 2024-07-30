import { MovieType } from "../Type";

export const getFavoriteMovies = () => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
};

export const removeFromFavorite = (movie: MovieType) => {
    const favorites = getFavoriteMovies();
    const updatedFavorites = favorites.filter((favorite: MovieType) => favorite.id !== movie.id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
};

export const addToFavorite = (movie: MovieType) => {
    const favorites = getFavoriteMovies();
    const movieExists = favorites.some((favorite: MovieType) => favorite.id === movie.id);

    if (!movieExists) {
        favorites.push(movie);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}