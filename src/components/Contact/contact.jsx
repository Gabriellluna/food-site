import React from 'react';
import "./contact.css";

const Contact = () => {

  return (
    <div className="contact-page">

      <section className="contact-hero">
        <h1>Entre em Contato</h1>
        <p>Reserve sua experiência ou fale conosco</p>
      </section>

      <section className="contact-container">

        <div className="contact-card">
          <h2>📍 Endereço</h2>
          <p>Rua Exemplo, 123</p>
          <p>São Bernardo do Campo - SP</p>
        </div>

        <div className="contact-card">
          <h2>📞 Telefone</h2>
          <p>(11) 99999-9999</p>
        </div>

        <div className="contact-card">
          <h2>💬 WhatsApp</h2>
          <a 
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            className="contact-button"
          >
            Falar no WhatsApp
          </a>
        </div>

        <div className="contact-card">
          <h2>📸 Instagram</h2>
          <a 
            href="https://instagram.com/seuinstagram"
            target="_blank"
            rel="noreferrer"
            className="contact-button"
          >
            Ver Instagram
          </a>
        </div>

        <div className="contact-card">
          <h2>🕐 Horário</h2>
          <p>Seg - Qui: 18h às 23h</p>
          <p>Sex - Dom: 18h às 00h</p>
        </div>

      </section>

      <section className="map-container">
        <iframe
          title="mapa"
          src="https://www.google.com/maps?q=São+Bernardo+do+Campo&output=embed"
        />
      </section>

    </div>
  )
};

export default Contact;