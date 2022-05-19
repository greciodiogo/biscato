import React from "react";
import './styles.css'

const Footer = () => {
  return (
    <footer>
      <div className="box-container">
        <div className="box">
          <h3>Sobre nós</h3>
          <p>
            Somos uma startup Angola, criada com o intuito de melhorar os
            processos de criação e desenvolvimento de uma empresa
          </p>
        </div>
        <div className="box">
          <h3>Top Localidades</h3>
          <a href="#none">none</a>
          <a href="#none">none</a>
        </div>
        <div className="box">
          <h3>Links rápidos</h3>
          <a href="#none">Principal</a>
          <a href="#nonebook">G.U.E</a>
          <a href="#nonepasso1">1ºPasso</a>
          <a href="#nonepasso2">2ºPasso</a>
          <a href="#nonepasso3">3ºPasso</a>
          <a href="#nonepasso4">4ºPasso</a>
          <a href="#nonepasso5">5ºPasso</a>
        </div>
        <div className="box">
          <h3>follow us</h3>
          <a href="#none">facebook</a>
          <a href="#none">instagram</a>
          <a href="#none">twitter</a>
          <a href="#none">linkedin</a>
        </div>
      </div>

      <h1 className="credit">
        {" "}
        Direitos reservados ao autor! <span>Grécio Diogo</span>{" "}
      </h1>
    </footer>
  );
};

export default Footer;
