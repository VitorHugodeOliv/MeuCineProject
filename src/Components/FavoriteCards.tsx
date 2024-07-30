import { useEffect, useState } from "react";
import { MovieType } from "../Type";
import { useNavigate } from "react-router-dom";
import './Favorite.css';

function Favorite() {
    const [favorites, setFavorites] = useState<MovieType[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        setFavorites(savedFavorites);
    }, []);

    const handleClick = (id: number) => {
        navigate(`/movie/${id}`);
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
                </div>
            ))}
        </div>
    )
}

export default Favorite;