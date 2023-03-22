import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavigationMenu = () => {
  return (
        <nav>
            <NavLink to="/" className="nav-link">Home</NavLink><br/>
            <NavLink to="/projects" className="nav-link">Projects</NavLink><br/>
            <NavLink to="/resume" className="nav-link">CV</NavLink><br/>
        </nav>
  )
}
