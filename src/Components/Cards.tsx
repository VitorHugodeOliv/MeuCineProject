import { useEffect, useState } from "react";
import apiRequestByPage from "../ApiRequest/ApiRequestByPage";
import { MovieType } from "../Type";
import { useNavigate } from "react-router-dom";
import './Cards.css';

function Cards() {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const navigate = useNavigate();

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
                </div>
            ))}
            <button onClick={() => handlePageChangeBack()}>anterior</button>
            <button onClick={() => handlePageChange()}>proxima</button>
        </div>
    )
}

export default Cards;