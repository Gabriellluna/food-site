import React from "react";
import "./Event.css";
import { motion } from "framer-motion";

export default function EventsVenue() {

    const numero = "5511964501791";
    const mensagem = "Olá! Gostaria de fazer um orçamento para o meu Evento!";

    return (
        <motion.div
            className="venue-info"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: -20 }}
            transition={{ duration: 1.2 }}>

            <section className="venue-hero">
                <div className="hero-overlay">
                    <h1>Levamos a experiência japonesa até o seu evento</h1>
                    <p>
                        Nossos chefs preparam pratos frescos e sofisticados no seu
                        evento, garantindo uma experiência gastronômica inesquecível.
                    </p>

                    <button className="hero-button">
                        Solicitar orçamento
                    </button>
                </div>
            </section>


            <section className="venue-info">

                <h2>Gastronomia japonesa no seu evento</h2>

                <p>
                    Oferecemos serviço completo de culinária japonesa para eventos,
                    levando nossos chefs e toda a experiência do restaurante
                    diretamente até você.
                </p>

                <p>
                    Ideal para aniversários, casamentos, eventos corporativos e
                    celebrações especiais que merecem um toque sofisticado.
                </p>

            </section>


            <section className="event-types">

                <h2>Eventos que atendemos</h2>

                <div className="types-grid">

                    <div className="type-card">
                        <h3>Aniversários</h3>
                        <p>
                            Torne seu aniversário ainda mais especial com sushi e
                            pratos japoneses preparados na hora pelos nossos chefs.
                        </p>
                    </div>

                    <div className="type-card">
                        <h3>Eventos Corporativos</h3>
                        <p>
                            Impressione seus clientes e colaboradores com uma
                            experiência gastronômica japonesa de alto nível.
                        </p>
                    </div>

                    <div className="type-card">
                        <h3>Casamentos e Celebrações</h3>
                        <p>
                            Levamos elegância e sabor para tornar seu evento
                            inesquecível.
                        </p>
                    </div>

                </div>

            </section>


            <section className="venue-gallery">

                <h2>Nossa experiência</h2>

                <div className="gallery-grid">

                    <img src="https://images.unsplash.com/photo-1553621042-f6e147245754" />
                    <img src="https://images.unsplash.com/photo-1579027989536-b7b1f875659b" />
                    <img src="https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56" />
                    <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c" />

                </div>

            </section>


            <section className="venue-cta">

                <h2>Leve nossa culinária para o seu evento</h2>

                <p>
                    Entre em contato e solicite um orçamento personalizado para
                    o seu evento.
                </p>

                <a href={`https://api.whatsapp.com/send/?phone=${numero}&text=${mensagem}.&type=phone_number&app_absent=0`}>
                <button className="cta-button">
                    Falar pelo WhatsApp
                </button>
                </a>

            </section>

        </motion.div>
    );
}