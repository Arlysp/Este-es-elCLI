import React from 'react'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Tienda Tecnologia</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to="/"className="nav-link active" aria-current="page" href="#">Home</NavLink>
                            <NavLink to="/categorias/Features"className="link">Features</NavLink>
                            <NavLink to="/categorias/Pricing"className="link">Pricing</NavLink>
                            <NavLink to="/categorias"className="nav-link disabled">Disabled</NavLink>
                        </div>
                    </div>
                </div>
                <div>
                    <CartWidget />
                </div>
            </nav>
        </div>
    )
}

export default Navbar

