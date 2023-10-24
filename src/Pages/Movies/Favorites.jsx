import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from '../../store/slices/favorite';

const Favorites = () => {
    const favorites = useSelector((state) => state.favorites.favorite);
    const dispatch = useDispatch();

    const handleRemoveFromFavorites = (movieId) => {
        dispatch(removeFromFavorites(movieId));
    };

    return (
        <div>
            <div className='row'></div>
            <h1 className='text-white m-5 m-5'>Favorites</h1>
            <ul className="d-flex flex-fill flex-wrap" style={{ justifyContent: 'center', alignItems: "center" }}>
                {favorites.map((movie) => (
                    <li className="bg-dark text-warning m-5 d-flex flex-fill flex-column" style={{ justifyContent: 'center', alignItems: "center" }} key={movie.id}>
                        <h1 className="m-2">{movie.title}</h1>  {" "} <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" width={"200px"} />
                        <button className="bg-black text-warning p-1 m-2" onClick={() => handleRemoveFromFavorites(movie.id)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Favorites;
