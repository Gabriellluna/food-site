import React from 'react';
import './About.css'

const About = () => {

  const section = document.querySelector('.cut-section');
  const image = document.querySelector('.cut-image');

  window.addEventListener('scroll', () => {
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom > 0) {
    const progress =
      (windowHeight - rect.top) / (windowHeight + rect.height);

    const translateY = Math.min(Math.max(progress * 100, 0), 100);

    image.style.transform = `translateY(${translateY}px)`;
    }
  });


  return (
    <>
      <section class="cut-section d-flex flex-direction-column">
      <div>
        <h1 className='cut-section-title'>A Arte de Nutrir a Alma com Tradição</h1>
        <div className='col-lg-12 d-flex justify-content-center'>
          <div className='cut-section-subtitle'>
            <p>Muito além do prato: um ritual de respeito e harmonia.</p>
            <p>Ingredientes selecionados, frescor absoluto e dedicação artesanal.</p>
            <p>Onde a tradição milenar encontra a paixão por servir bem.</p>
          </div>
        </div>
      </div>

      <div class="cut-mask">
        <img 
          src="images/dish3.jpg" 
          alt="Sushi" 
          class="cut-image"
        />
      </div>

      <div className='quick-links'>
        <div className='links'>
          
        </div>
        <div className='links'>
          
        </div>
        <div className='links'>
          
        </div>

      </div>
    </section>

    </>
  );
};

export default About;
