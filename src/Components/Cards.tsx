import { useEffect, useState } from "react";
import apiRequest from "../ApiRequest/Api";
import { MovieType } from "../Type";
import { useNavigate } from "react-router-dom";
import './Cards.css';

function Cards() {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        apiRequest().then((data) => {
            const additionalMovies = data.results.slice(10);
            setMovies(additionalMovies);
        })
    }, []);

    const handleClick = (id: number) => {
        navigate(`/movie/${id}`);
    }

    return (
        <div className="additional-movies-container">
            {movies.map((movie) => (
                <div key={movie.id} className="movies-addictional-cards">
                    <button onClick={() => handleClick(movie.id)} className="movie-button">
                        <div className="movie-image-container">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        </div>
                        <h3>{movie.title}</h3>
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Cards;