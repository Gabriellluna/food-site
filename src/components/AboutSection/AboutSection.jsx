import "./AboutSection.css";

const AboutSection = () => {
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

          <img src="/images/restaurante.jpg" alt="Restaurante japonês" />

        </div>

      </div>

      <div className="about-history">

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

    </section>

  );
};

export default AboutSection;