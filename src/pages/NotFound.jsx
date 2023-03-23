import React from 'react'
import { NavLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <section>
      <h3>404 page not found.</h3>
      <p>
        the page you're looking for doesn't exist yet, maybe it could in the future. <br/>
        Meanwhile the menu un the left can help you, unless you were looking for the
        soustainability page,that is{" "}
        <NavLink to="/sustainability" className="nav-link">
          here
        </NavLink>.
      </p>
    </section>
  );
}
