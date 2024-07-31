import { useEffect, useState } from "react";
import { MovieType } from "../Type";
import { useNavigate } from "react-router-dom";
import { addToFavorite, getFavoriteMovies, removeFromFavorite } from "../Service/AddToFavorite";
import star from '../Images/estrela.png';
import emptyStar from '../Images/estrelaApagada.png';
import './Favorite.css';

function Favorite() {
    const [favorites, setFavorites] = useState<MovieType[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        setFavorites(savedFavorites);
    }, []);

    useEffect(() => {
        const savedFavorites = getFavoriteMovies();
        setFavorites(savedFavorites);
    }, []);

    const handleClick = (id: number) => {
        navigate(`/movie/${id}`);
    };

    const handleFavorite = (movie: MovieType) => {
        const isFavorite = favorites.some(fav => fav.id === movie.id);
        if (isFavorite) {
            removeFromFavorite(movie);
            setFavorites(favorites.filter(fav => fav.id !== movie.id));
        } else {
            addToFavorite(movie);
            setFavorites([...favorites, movie]);
        }
    };

    return (
        <div className="favorites-container">
            {favorites.map((movie) => (
                <div key={movie.id} className="favorite-card">
                    <button onClick={() => handleClick(movie.id)} className="favorite-movie-button">
                        <div className="favorite-image-container">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        </div>
                        <h3>{movie.title}</h3>
                    </button>
                    <button className="favorite-icon" onClick={() => {handleFavorite(movie)}}>
                        <img  src={favorites.find(fav => fav.id === movie.id) ? star : emptyStar} 
                            alt="Favorite Icon" />
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Favorite;