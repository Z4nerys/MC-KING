import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const Detalle = () => {

    //obtener el queryparams que se envia por la url. con javascript. tmb se puede hacer con hooks
    //aca le mando la url como parametro
    const query = new URLSearchParams(window.location.search);
    //obtengo el dato que quiero de la url, mandandole el param que quiero obtener x parametro
    const movieId = query.get('movieID')

    const api_key = 'b86f56b14a01246d8eb8c77620768cf7';
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`
    const imageUrl = 'https://image.tmdb.org/t/p/w500/';

    const [movie, setMovie] = useState('');

    useEffect(() => {
        axios.get(url)
            .then(data => {
                console.log(data.data)
                setMovie(data.data)
            }).catch(error => {
                console.log(error)
                alert('Tuvimos problemas, intente en unos momentos!')
            })

    }, [url]);

    return (
        <>
            {
                movie !== '' &&
                <>
                    <h2 className='text-center mt-1'>Título: {movie.title}</h2>
                    <div className='row mt-3'>
                        <div className='col-6'>
                            <img className='img-fluid' src={imageUrl + movie.poster_path} alt={movie.title} />
                        </div>
                        <div className='col-6'>
                            <h5>Release date: {movie.release_date}</h5>
                            <h5 className='mt-4'>overview:</h5>
                            <p> {movie.overview}</p>
                            <h5 className='mt-4'>Rating: {movie.vote_average}</h5>
                            <h5 className='mt-4'>Generos:</h5>
                            <ul className='list-group '>{
                                movie.genres.map(genre => {
                                    return <li className='list-group-item' key={genre.id}>
                                        {genre.name}
                                    </li>
                                })
                            }
                            </ul>
                        </div>
                    </div>
                </>
            }

        </>
    )
}
