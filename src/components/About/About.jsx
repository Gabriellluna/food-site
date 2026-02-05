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
        <h1 style={{color:"#000000"}}>texto bonito aqui</h1>

      <div class="cut-mask">
        <img 
          src="images/dish3.jpg" 
          alt="Sushi" 
          class="cut-image"
        />
      </div>
    </section>

    </>
  );
};

export default About;
