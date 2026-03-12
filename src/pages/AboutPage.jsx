import React from 'react';
import Nav from '../components/nav/Nav';
import AboutSection from '../components/AboutSection/AboutSection';
import Map from '../components/map/Map';
import Footer from '../components/footer/Footer';
import { useEffect } from 'react';

function AboutPage() {

  useEffect(() => {
    document.title="Sobre Nós | Comida Oriental & Talls"
  }, [])

  return (
    <div>
        <Nav name={"Sobre Nós"}/>
        <AboutSection/>
        <Map/>
        <Footer/>
    </div>
  );
}

export default AboutPage;
