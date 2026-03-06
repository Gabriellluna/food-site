import React from "react";
import "./Call.css";

const Call = () => {
  return (
    <div className="quick-links">

      <a href="/sobre" className="quick-card">
        <div className="icon">
          <i className="fa-solid fa-store"></i>
        </div>
        <h3>Sobre</h3>
        <p>Conheça nosso restaurante</p>
      </a>

      <a href="/cardapio" className="quick-card">
        <div className="icon">
          <i className="fa-solid fa-fish"></i>
        </div>
        <h3>Cardápio</h3>
        <p>Veja nossos pratos</p>
      </a>

      <a href="/contato" className="quick-card">
        <div className="icon">
          <i className="fa-solid fa-phone"></i>
        </div>
        <h3>Contato</h3>
        <p>Peça seu delivery</p>
      </a>

    </div>
  );
};

export default Call;