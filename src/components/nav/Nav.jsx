import React, { useEffect, useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import './Nav.css'

const Nav = ({name}) => {
  return (
    <>
        <div>    
            <div className='navigator' style={{ backgroundImage: `url(./images/dish6.jpg)` }} >
                <div className='navigator-content'>
                    <a href='/'><img alt='logo aqui' src='images/logo.png'></img></a>
                    <div className='nav'>
                        <a href="/"><h3 className='text-white'>Home</h3></a>
                        <a href='/sobre'><h3 className='text-white'>Sobre</h3></a>
                        <h3 className='text-white'>Rodízio</h3>
                        <a href="/cardapio"><h3 className='text-white'>Cardápio</h3></a>
                        <a href="/contato"><h3 className='text-white'>Contato</h3></a>
                    </div>
                </div>
                <div className='col-lg-12 d-flex justify-content-center align-items-center page-name'>
                    <h1>{name}</h1>
                </div>
            </div>
        </div>
    </>
  );
};

export default Nav;
