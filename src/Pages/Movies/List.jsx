import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Movies from './Movies';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import axiosInstance from '../../axiosConfig/instance';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../store/slices/favorite';
import { moviesAction } from './../../store/slices/movies';

export default function List(props) {
    const navigate = useNavigate();
    const { id } = useParams()
    const [page, setPage] = useState(1);
    // const [movies, setmovies] = useState([])
    // const movies = useLoaderData() || [];
    // console.log(typeof movies); because empty arrays are objects in JavaScript
    // console.log(Array.isArray(movies));
    // useEffect(() => {
    //     axiosInstance.get(`/popular?/&page=${page}`)
    //         .then((res) => {
    //             // console.log(res.data.results);
    //             setmovies(res.data.results);
    //             console.log(movies);
    //         }).catch((err) => {
    //             console.log(err);
    //         });
    // }, [page]);

    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.favorite);
    const movies = useSelector((state) => state.movies);
    useEffect(() => {
        dispatch(moviesAction(page))
    }, [dispatch, page]);

    const handleNextPage = () => {
        setPage((page) => page + 1);
    };
    const handlePrevPage = () => {
        if (page > 1) {
            setPage((page) => page - 1);
        }
    };

    const isFavorite = (movie) => {
        return favorites.some((favMovie) => favMovie.id === movie.id);
    };

    const toggleFavorite = (movie) => {
        // console.log("Fav", favorites);
        // console.log("mov", movie);
        if (isFavorite(movie)) {
            dispatch(removeFromFavorites(movie.id));
        } else {
            dispatch(addToFavorites(movie));
        }
    };
    // console.log('Movies :', movies);

    return (
        <>
            <div className='mx-5 text-center'>
                <button className='btn btn-transparent text-white ' onClick={handlePrevPage}><i className="fa-solid fa-chevron-left"></i></button>
                <button className='btn btn-transparent text-white ' onClick={handleNextPage}><i className="fa-solid fa-chevron-right"></i></button>
            </div>
            <div className='row'></div>
            <div className="containerfluid m-5 ">
                <Row xs={1} md={3} className="g-4">
                    {movies.map((movie) => (
                        <Col key={movie.id}>
                            <Card className={`bg-dark text-white ${isFavorite(movie) ? 'border-warning' : 'border-secondary'}`}>
                                <Card.Img
                                    variant="top"
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    alt={movie.title}
                                />
                                <Card.Body className="d-flex flex-fill flex-column bg-dark text-white">
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>{movie.overview}</Card.Text>
                                    <div className="mt-auto" onClick={() => { navigate(`/details/${movie.id}`) }}>
                                        <button
                                            className="btn btn-warning text-primary"
                                        >
                                            Details
                                        </button>
                                        <button
                                            className={`btn 'btn-outline-secondary'`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleFavorite(movie);
                                            }}
                                        >
                                            <i className={`fas fa-heart mx-2 ${isFavorite(movie) ? 'text-danger' : 'text-secondary'}`}></i>
                                        </button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <div className=' text-center m-5'>
                    <button className='btn btn-transparent text-white text-center m-5' onClick={handlePrevPage}><i className="fa-solid fa-chevron-left"></i></button>
                    <button className='btn btn-transparent text-white text-center m-5' onClick={handleNextPage}><i className="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
        </>
    )
}

// export const loader = async () => {
//     const page = 1;
//     try {
//         var res = await axiosInstance.get(`/popular?/&page=${page}`)
//         return res.data.results
//     } catch (err) {
//         return err;
//     }

// }