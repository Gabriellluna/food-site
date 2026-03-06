import React from 'react';
import Nav from '../components/nav/Nav';
import Menu from '../components/menu/Menu';
import Footer from '../components/footer/Footer';
import Map from '../components/map/Map';

function MenuPage() {
  return (
    <div>
        <Nav name={"Cardápio"}/>
        <Menu/>
        <Map/>
        <Footer/>
    </div>
  );
}

export default MenuPage;
