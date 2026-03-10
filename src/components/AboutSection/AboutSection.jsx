import "./AboutSection.css";
import { motion } from "framer-motion";

const AboutSection = () => {
  
  const offset = window.innerWidth < 768 ? "5%" : "20%";
  const offset2 = window.innerWidth < 768 ? "-5%" : "-20%";

  return (

    <section className="about-container">

      <div className="about-content">

        <div className="about-text">

          <h2>Sobre Nós</h2>

          <p>
            O <strong>Comida Oriental & Talls</strong> nasceu com a missão de trazer
            a verdadeira experiência da culinária japonesa para nossa cidade.
            Cada prato é preparado com ingredientes frescos e técnicas tradicionais,
            garantindo sabor, qualidade e autenticidade em cada detalhe.
          </p>

          <p>
            Nossa paixão pela gastronomia começou há muitos anos, quando nossos
            fundadores descobriram o encanto da cultura japonesa e decidiram
            transformar essa admiração em um restaurante que une tradição,
            qualidade e inovação.
          </p>

          <p>
            Hoje somos reconhecidos por oferecer um ambiente acolhedor,
            atendimento de excelência e pratos que conquistam desde os amantes
            da culinária japonesa até quem está experimentando pela primeira vez.
          </p>

        </div>

        <div className="about-image">

          <img src="/images/restaurant.jpg" alt="Restaurante japonês" />

        </div>

      </div>

      <div className="about-history">
        <img alt='logo aqui' src='images/logo.png'></img>
        <div>
          <h3>Nossa História</h3>

          <p>
            Desde a nossa inauguração, buscamos criar mais do que apenas refeições.
            Queremos proporcionar momentos especiais, reunindo amigos e famílias
            em torno da boa gastronomia.
          </p>

          <p>
            Com o passar dos anos ampliamos nosso cardápio, trazendo novas
            combinações de sushis, sashimis, temakis e pratos quentes,
            sempre mantendo o compromisso com qualidade e tradição.
          </p>
        </div>

      </div>

      {/* <div className="about-highlights">
        <motion.h1
          className="highlight-left"
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: offset2 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          viewport={{ once: true }}
        >Paixão</motion.h1>
        <div className="second-highlight">
          <p>O que nos move é a</p>
          <h1>Tradição</h1>
        </div>
        <motion.h1
          className="highlight-right"
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: offset }}
          transition={{ duration: 1.5, delay: 0.6 }}
          viewport={{ once: true }}
        >Sabor</motion.h1>
      </div> */}

    </section>

  );
};

export default AboutSection;