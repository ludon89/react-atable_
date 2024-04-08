import React from "react";

import Titre from "../components/Titre";
import Content from "../components/Content";

import buffet from "../buffet.jpg";
import "../styles/accueil.css";

const Accueil = () => {
  return (
    <>
      <Titre text="À table !" />
      <Content>
        <img src={buffet} alt="Buffet" className="home-img" />
      </Content>
    </>
  );
};

export default Accueil;
