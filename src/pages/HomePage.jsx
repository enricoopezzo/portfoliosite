import React from 'react'
import { NavLink } from "react-router-dom";

export const HomePage = ({ data }) => {
    
  return (
    <section>
      <p>{data.bio[0].bio}</p>
      <NavLink to="/sustainability" className="nav-link">
        sustainability
      </NavLink>
      <br />
    </section>
  );
}
