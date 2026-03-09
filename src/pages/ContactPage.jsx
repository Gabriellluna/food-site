import React from 'react';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import Map from '../components/map/Map';
import Contact from '../components/Contact/contact';

function ContactPage() {
  return (
    <div>
        <Nav name={"Contato"}/>
        <Contact/>  
        <Map/>
        <Footer/>
    </div>
  );
}

export default ContactPage;
