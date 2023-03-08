import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsCollection, BsEnvelope, BsPersonSquare } from 'react-icons/bs'

export const Header = () => {
  return (
    <header>
      <div class="logo">
        <NavLink to="/" className="nav-link">
          <h1>enrico opezzo</h1>
          <h2>front end developer</h2>
        </NavLink>
      </div>  
      <nav>
        <NavLink to="/projects" className="nav-link"><BsCollection/> Projects</NavLink><br/>
        <NavLink to="/resume" className="nav-link"><BsPersonSquare/> Resume</NavLink><br/>
        <NavLink to="/contacts" className="nav-link"><BsEnvelope/> Contacts</NavLink>  
      </nav>
    </header>
  )
}
