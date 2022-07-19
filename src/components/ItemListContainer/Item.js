import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto} ) => {
  return (
    <div className='card-container'>
        <div className='img-container'>
        <img src={`/item/${producto.thumbnail}`}  alt={nombre} className="img-item"/>
        </div>

        <h5 className={`/item/${producto.title}`}></h5>
        <h4 className={`/item/${producto.price}`}></h4>
        <p className={`/item/${producto.description}`}></p>
       <Link to={`/item/${producto.id}`}><button>DETALLE</button></Link>

    </div>
  )
}

export default Item