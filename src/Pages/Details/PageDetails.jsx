import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../axiosConfig/instance';

export default function PageDetails(props) {
    const { id } = useParams()
    // console.log(id);
    const [movie, setmovie] = useState([]);
    useEffect(() => {
        axiosInstance.get(`/${id}?`)
            .then((res) => {
                // console.log(res.data);
                setmovie([res.data]);
                console.log(movie);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <div className='row'></div>
            <br />
            <div className="m-5 text-center">
                <Row>
                    {movie.map((m) => (
                        <React.Fragment key={m.id}>
                            <Col md={6}>
                                {m ? (
                                    <div className="d-flex flex-column align-items-center justify-content-center h-100">
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                                            alt={m.title}
                                            width={"350px"}
                                            className='img-fluid'
                                        />
                                        <button className='btn btn-success m-3'>Watch Now</button>
                                    </div>
                                ) : (
                                    <p>Loading...</p>
                                )}
                            </Col>
                            <Col md={6}>
                                {m ? (
                                    <div className="d-flex align-items-center justify-content-center h-100">
                                        <div>
                                            <h2 className='text-warning'>{m.title}</h2>
                                            <p>{m.overview}</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta expedita atque veniam?
                                                Voluptatem hic similique a quam tempora ex fugit, quis labore quisquam vel id laudantium obcaecati
                                                ipsa explicabo tenetur.. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Dicta expedita atque veniam? Voluptatem hic similique a quam tempora ex fugit, quis
                                                labore quisquam vel id laudantium obcaecati ipsa explicabo tenetur.
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta expedita atque veniam?
                                                Voluptatem hic similique a quam tempora ex fugit, quis labore quisquam vel id laudantium obcaecati
                                                ipsa explicabo tenetur.. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Dicta expedita atque veniam? Voluptatem hic similique a quam tempora ex fugit, quis
                                                labore quisquam vel id laudantium obcaecati ipsa explicabo tenetur.</p>
                                            <p className='text-primary'>Release Date: {m.release_date}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <p>Loading...</p>
                                )}
                            </Col>
                        </React.Fragment>
                    ))}
                </Row>
            </div>
        </>
    )
}
