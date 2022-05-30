import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher)
    console.log(heroes)
    /* 'id': 'dc-green',
        'superhero':'Green Lantern', 
        'publisher':'DC Comics', 
        'alter_ego':'Alan Scott',
        'first_appearance':'All-American Comics #16',
        'characters':'Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz' */
    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id} 
                        {...hero}
                    /> 

                ))
            }
        </div>
    )
}
