import React from 'react';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import Event from '../components/Event/Event';
import Map from '../components/map/Map';
import { useEffect } from 'react';

function EventPage() {

  useEffect(() => {
    document.title="Eventos | Comida Oriental & Talls"
  }, [])

  return (
    <div>
        <Nav name={"Eventos"}/>
        <Event/>
        <Map/>
        <Footer/>
    </div>
  );
}

export default EventPage;
