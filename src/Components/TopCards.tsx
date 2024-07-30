import { useEffect, useState } from "react";
import apiRequest from "../ApiRequest/Api";
import { MovieType } from "../Type";
import { useNavigate } from "react-router-dom";
import './TopCards.css';

function TopCards() {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        apiRequest().then((data) => {
            const sortedMovies = data.results.sort((a: any, b: any) => b.popularity - a.popularity);
            const topMovies = sortedMovies.slice(0, 10); 
            setMovies(topMovies);
        })
        console.log(movies)
    }, []);

    const handleClick = (id: number) => {
        navigate(`/movie/${id}`);
    }


    return (
        <div className="card-container">
            <div className="card-background">
                {[...movies, ...movies].map((movie, index) => (
                    <div key={index < movies.length ? movie.id : `${movie.id}-duplicate`}
                        className="movies-card">
                            <div className="movie-image-container">
                                <span className={`movie-index ${index % 10 < 3 ? 'top-movie-index' : ''}`}>
                                    #{(index % 10) + 1}
                                </span>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    onClick={ () => handleClick(movie.id) }
                                    alt={movie.title}
                                />
                            </div>
                        <h3>{movie.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
    
}

export default TopCards;