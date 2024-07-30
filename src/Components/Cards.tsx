import { useEffect, useState } from "react";
import apiRequestByPage from "../Service/ApiRequest/ApiRequestByPage";
import { MovieType } from "../Type";
import { useNavigate } from "react-router-dom";
import star from '../Images/estrela.png';
import emptyStar from '../Images/estrelaApagada.png';
import { addToFavorite, getFavoriteMovies, removeFromFavorite } from "../Service/AddToFavorite";
import './Cards.css';

function Cards() {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [favorites, setFavorites] = useState<MovieType[]>([]);
    const navigate = useNavigate();


    useEffect(() => {
        const savedFavorites = getFavoriteMovies();
        setFavorites(savedFavorites);
    }, []);

    useEffect(() => {
        apiRequestByPage(currentPage).then((data) => {
            const additionalMovies = data.results;
            console.log(additionalMovies)   
            setMovies(additionalMovies);
        })
    }, [currentPage]);

    const handleClick = (id: number) => {
        navigate(`/movie/${id}`);
    }

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

    const handlePageChange = () => {
        const newPage = currentPage + 1;
        setCurrentPage(newPage);
        console.log(currentPage)        
    }

    const handlePageChangeBack = () => {
        const newPage = currentPage - 1;
        setCurrentPage(newPage);
        console.log(currentPage)
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
                    <button className="favorite-icon" onClick={() => {handleFavorite(movie)}}>
                        <img  src={favorites.find(fav => fav.id === movie.id) ? star : emptyStar} 
                            alt="Favorite Icon" />
                    </button>
                </div>
            ))}
            <button onClick={() => handlePageChangeBack()}>anterior</button>
            <button onClick={() => handlePageChange()}>proxima</button>
        </div>
    )
}

export default Cards;