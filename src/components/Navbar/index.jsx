import React from "react";

import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/accueil">Accueil</NavLink>
          <NavLink to="/recettes">Recettes</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
