import { Link } from "react-router-dom";
import apiRequestSearch from "../Service/ApiRequest/ApiSearch";
import { useState } from "react";
import './SeachBar.css';

function SeachBar() {
    const [seachTerm, setSearchTerm] = useState<string>('');
    const [results, setResults] = useState<any[]>([]);

    const handleSeach = async (e: any) => {
        const search = e.target.value;
        setSearchTerm(search);

        if (search.length === 0) {
            setResults([]);
            return;
        }

        const seachResults = await apiRequestSearch(search);
        setResults(seachResults);
    }
return (
    <div>
        <input
            type="text"
            placeholder="Buscar filmes..."
            value={seachTerm}
            onChange={handleSeach}
            className="search-bar"
        />
        {results.length > 0 && (
            <ul className="search-results">
                {results.map(movie => (
                    <li key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        )}
    </div>
);
}

export default SeachBar;