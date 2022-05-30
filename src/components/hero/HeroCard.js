import {Link} from 'react-router-dom'

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const imagePath = `/assets/heroes/${id}.jpg`

    return (
        <div className='col'>
            <div className='card'>
                <div className='row no-gutters'>
                    <div className='col-4'>
                        <img src={imagePath} className="card-img" alt={superhero}/>
                    </div>
                    <div className='col-8'>
                        <div className='card-body'>
                            <h5 className='card-title'>{superhero}</h5>
                            <p className='card-text'>{alter_ego}</p>
                            {
                                (alter_ego !== characters) &&
                                <p className='text-muted'>{characters}</p>
                            }
                            <p className='card-text'>
                                <small className='text-muted'>{first_appearance}</small>
                            </p>
                            <Link to={`/hero/${id}`}>
                                Mas...
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
        /* <div className='col'>
            <div className='card'>
                <div className='card-header bg-info'>{superhero}</div>
                <div className='card-body'>
                    <img src={imagePath} className="card-img" alt={superhero} />
                    <h5 className='card-title'>{alter_ego}</h5>
                    <p className='card-text'>{characters}</p>
                </div>
                <div className='card-footer text-muted'>{first_appearance}</div>
            </div>
        </div> */
        
