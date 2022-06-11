import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import { Header } from '../../Header/Header';
import { Listado } from '../../Listado';
import { Detalle } from '../../Detalle';
import { Resultados } from '../../Resultados';
import { Home } from '../../Home/Home';
import { Locales } from '../../Locales';
import { Contactenos } from '../../Contactenos';
import './styles.css';

export const DashBoardRoute = () => {

    const favMovies = localStorage.getItem('favs');
    let movieInFavs;

    if(favMovies !== null){
        movieInFavs = JSON.parse(favMovies)
    }else{
        movieInFavs = []
    }

    const addRemoveFavs = (e) =>{
        const parent = e.target.parentElement
        const imgURL = parent.querySelector('img').getAttribute('src')
        const title = parent.querySelector('h5').innerText;
        const overview = parent.querySelector('p').innerText;
        const id = e.target.getAttribute('datamovieid');
        const movieData = {
            title,
            id,
            imgURL,
            overview
        }
        let movieIsInArray = movieInFavs.filter(movie => movie.id === movieData.id)

        if (movieIsInArray.length === 0){
            movieInFavs.push(movieData)
            console.log('Pelicula agregada')
        }else{
            let deleteMovie = movieInFavs.filter(movie => movie.id !== movieData.id)
            movieInFavs = deleteMovie
            console.log('Pelicula eliminada')
        }
        localStorage.setItem('favs', JSON.stringify(movieInFavs))
    }

    return (
        <div>
            <Header />
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/listado' render={(props) => <Listado addRemoveFavs={addRemoveFavs} {...props}/>}/>
                    <Route path='/detalle' component={Detalle}/>
                    <Route path='/locales' component={Locales}/>
                    <Route path='/contacto' component={Contactenos}/>
                    <Route path='/resultados' component={Resultados}/>
                </Switch>
            </div>
        </div>
    )
}
