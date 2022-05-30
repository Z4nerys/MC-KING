import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import swAlert from '@sweetalert/with-react'

export const Resultados = () => {
    const query = new URLSearchParams(window.location.search)
    const keyword = query.get('keyword')

    const api_key = 'b86f56b14a01246d8eb8c77620768cf7'
    const imageUrl = 'https://image.tmdb.org/t/p/w500/';

    const [moviesResult, setMoviesResult] = useState([]);

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${keyword}`;

    useEffect(() => {
        axios.get(url)
            .then(data => {
                if(data.data.results.length === 0){
                    swAlert("No se encontraron resultados")

                }
                setMoviesResult(data.data.results)
            })
            .catch(error => console.log(error))
    }, [url]);


    return (
        <div>
            <h2>Buscaste: <em>{keyword}</em></h2>
            { moviesResult.length === 0 && <h5>No se encontraron resultados</h5>}

            <div className="row mt-3 ">
                {moviesResult.map((movie, idx) => {
                    return (
                        <div className="col-4 mb-5" key={idx}>
                            <div className="card">
                                <img src={imageUrl + movie.poster_path} alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <span className="card-text">Description:</span>
                                    <p className="card-text">{movie.overview.substring(0, 200)}...</p>
                                    <Link to={`/detalle?movieID=${movie.id}`} className="btn btn-dark">View detail</Link>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}
