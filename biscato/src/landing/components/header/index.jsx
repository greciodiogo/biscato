import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <header>
      <div className="header-top">
        <a href="#logo" className="logo">
          biscato
        </a>
        <div className="buttons">
          <button className="btn outlined">continuar como Convidado</button>
          <button className="btn contained">Entrar</button>
        </div>
      </div>
      <div className="header-bottom">
        <div className="header-content">
          <h2>Venha desenvolver o seu potencial</h2>
          <h3>A riqueza de um homem é produto da sua capacidade de pensar</h3>
        </div>
        <div className="buttons">
          <a href="#about" className="btn-large contained">continuar</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
