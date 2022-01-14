import React from "react";
import { NavLink} from "react-router-dom";
const NavBar = () => {
  return ( <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/movies">Vidly</NavLink>
    
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link" to="/movies">Movies</NavLink>
        <NavLink className="nav-link" to="/customers">Customers</NavLink>
        <NavLink className="nav-link" to="/rentals">Rentals </NavLink>
        <NavLink className="nav-link" to="/login">Login </NavLink>
      </div>
    </div>
  </div>
</nav> );
}
 

export default NavBar;
