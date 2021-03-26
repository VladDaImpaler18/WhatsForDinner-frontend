import React from 'react'
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'gray',
    color: 'white'
  }
function Navbar() {
    return (
        <div>
            <NavLink to="/" exact style={link} activeStyle={{ background: 'darkblue' }}>Find a Recipe</NavLink>
            <NavLink to="/history" exact style={link} activeStyle={{ background: 'darkblue' }}>History</NavLink>
        </div>
    )
}

export default Navbar;