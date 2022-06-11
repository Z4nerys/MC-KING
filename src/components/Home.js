import React from 'react'
import { Link } from 'react-router-dom'
import { promociones } from '../data/data'

export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <h1>productos por tipo</h1>
      <ul>
        
        <li><Link to={'/listado?prod=hamburguesa'}><img src='/assets/img/Big-Mac.png' alt='hamburguesas' /></Link></li>
        <li><Link to={'/listado?prod=postres'}><img src='/assets/img/super-cono.png' alt='postres'/></Link></li>
        <li><Link to={'/listado?prod=ensalada'}><img src='/assets/img/ensalada-cesar-con-pollo-crujiente.png' alt='ensalada'/></Link></li>
        <li><Link to={'/listado?prod=cafe'}><img src='/assets/img/expresso.png' alt='cafe'/></Link></li>
        <li><Link to={'/listado'}>Ver todos</Link></li>
        
      </ul>
      <h1>Promociones ver despues</h1>
      {promociones.map(promo => {
        return <div key={promo.id} style={{width: '200px'}}>
          <Link to={`/detalle?ID=${promo.id}`}>
            <img src={`/assets/img/${promo.img}`} alt={promo.nombre} />
          </Link>
        </div>
      })}

    </>

  )
}
