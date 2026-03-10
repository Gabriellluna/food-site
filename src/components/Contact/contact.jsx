import React from 'react';
import "./contact.css";

const Contact = () => {

  const numero = "5511964501791";
  const mensagem = "Olá! Gostaria de fazer um pedido.";

  return (
    <div className="contact-page">

      <section className="contact-hero">
        <h1>Entre em Contato</h1>
        <p>Reserve sua experiência ou fale conosco</p>
      </section>

      <section className="contact-container">

        <a href="https://www.google.com/maps/place/COMIDA+ORIENTAL+%26+TALLS/@-23.5781488,-46.6236422,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce59005e39d0d5:0x4b7c455cbca2b2e8!8m2!3d-23.5781488!4d-46.6236422!16s%2Fg%2F11yn5dknn0?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D">
          <div className="contact-card">
            <h2><i class="fa-solid fa-location-dot"></i> Endereço</h2>
            <p>R. Cel. Diogo, 437 - Jardim da Gloria, São Paulo - SP, 01545-000</p>
            <p>São Paulo - SP</p>
          </div>
        </a>

        <a href={`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`} target='blank'>
          <div className="contact-card">
            <h2><i class="fa-solid fa-phone"></i> Telefone</h2>
            <p>(11) 96450-1791</p>
          </div>
        </a>

        <div className="contact-card">
          <h2><i class="fa-brands fa-whatsapp"></i> WhatsApp</h2>
          <a
            href={`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`}
            target="_blank"
            rel="noreferrer"
            className="contact-button"
          >
            Falar no WhatsApp
          </a>
        </div>

        <div className="contact-card">
          <h2><i class="fa-brands fa-instagram"></i> Instagram</h2>
          <a
            href="https://www.instagram.com/comidaorientaletalls/"
            target="_blank"
            rel="noreferrer"
            className="contact-button"
          >
            Ver Instagram
          </a>
        </div>

        <div className="contact-card">
          <h2><i class="fa-solid fa-clock"></i> Horário</h2>
          <p>Seg - Qui: 18h às 23h</p>
          <p>Sex - Dom: 18h às 00h</p>
        </div>

      </section>
    </div>
  )
};

export default Contact;