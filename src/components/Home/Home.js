import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export const Home = () => {
  return (
    <>
      <div className="slider total-content">
          <Link className="link" to='/listado'>Encontrá tu hamburguesa</Link>
      </div>
      <div className="services total-content">
        <div className='title-services'>
            <h2> A tu servicio, siempre!</h2>
        </div>
        <div className="list-services">
          <div>
            <Link className='link-img'>
                <img src="/assets/img/GRAND-TASTY-TRIPLE.png" alt="Hamburguesa" />
            </Link>
            <h3>Hamburguesas</h3>
            <p>Nuestro catalogo con mejores hamburguesas del mundo!</p>
          </div>
          <div>
            <Link className='link-img'>
                <img alt="Cajita Feliz" />
            </Link>
            <h3>Cajita Feliz</h3>
            <p>Los mejores combo de cajita feliz para compartir en familia</p>
          </div>
          <div>
            <Link className='link-img'>
                <img src="/assets/img/sundae-chocolate.png" alt="Postres" />
            </Link>
            <h3>Postres</h3>
            <p>Probá los deliciosos postres que tenemos para vos</p>
          </div>
          <div>
            <Link className='link-img'>
                <img src="/assets/img/ensalada-cesar-con-pollo-crujiente.png" alt="Ensaladas" />
            </Link>
            <h3>Ensaladas</h3>
            <p>Menu opcional de ensaladas hechas con amor y los mejores ingredientes</p>
          </div>
        </div>
      </div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>

    </>

  )
}
