import { useEffect, useState } from "react";
import { MovieType } from "../Type";
import { useParams } from "react-router-dom";
import './Movie.css';

function Movie() {
    const { id } = useParams<{ id : string }>();
    const [movie, setMovie] = useState<MovieType | null>(null);

    useEffect(() => {
        const fetchMovie = async () => {
            const apiKey = 'da380199dd5023ac813dce59f693d6d2';
            const apiUrl = 'https://api.themoviedb.org/3/movie/';

            try {
                const response = await fetch(`${apiUrl}${id}?api_key=${apiKey}&language=pt-BR`);
                const data = await response.json();
                setMovie(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovie();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

return (
    <>
    <div className="movie-card">
        <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie?.title} />
        <div className="movie-details">
            <h1 className="movie-title">{movie?.title}</h1>
            <h3 className="original-title">{movie.original_title}</h3>
            <div className="movie-span">
                <span>Data de lançamento: {movie?.release_date}</span>
                <span>Orçamento: {movie?.budget}</span> 
            </div>
            <p className="movie-overview">{movie?.overview}</p>
            <div className="movie-span">
                <span>Nota: {movie?.vote_average}</span>
                <span>Votos: {movie?.vote_count}</span>
                <span>Popularidade: {movie?.popularity}</span>
            </div>
        </div>
    </div>
    </>
);
}

export default Movie;