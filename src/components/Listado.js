import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Redirect } from "react-router-dom"
import swAlert from '@sweetalert/with-react'

export const Listado = ({ addRemoveFavs }) => {
    const tokenExist = sessionStorage.getItem('token')
    const api_key = 'b86f56b14a01246d8eb8c77620768cf7'
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&page=1`;
    const imageUrl = 'https://image.tmdb.org/t/p/w500/';

    const [moviesList, setMoviesList] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(data => {
                setMoviesList(data.data.results)
            })
            .catch(error => {
                console.log(error)
                swAlert(<h2>Tuvimos problemas, intente en unos momentos!</h2>)
            })
    }, [url]);

    return (
        <>
            {!tokenExist && <Redirect to='/' />}

            <div className="row mt-3 ">
                {moviesList.map((movie, idx) => {
                    return (
                        <div className="col-4 mb-5" key={idx}>
                            <div className="card">
                                <img src={imageUrl + movie.backdrop_path} alt="" className="card-img-top" />
                                <button 
                                    className="btn btn-warning" 
                                    onClick={addRemoveFavs}
                                    datamovieid ={movie.id}
                                >
                                    Agregar a favoritos
                                </button>
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <span className="card-text">Description:</span>
                                    <p className="card-text">{movie.overview.substring(0, 200)}...</p>
                                    <Link to={`/detalle?movieID=${movie.id}`} className="btn btn-dark mx-2">View detail</Link>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>

        </>
    )
}
