import React, { useEffect, useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import './Nav.css'
import { useSearchParams } from 'react-router-dom';

const Nav = ({name}) => {
  return (
    <>
        <div className='col-lg-12'>
            <div className='navigator'>
                <div className='navigator-content'>
                    <a href='/'><img alt='logo aqui' src='images/logo.png'></img></a>
                    <div className='nav'>
                        <a href="/"><h3 className='text-white'>Home</h3></a>
                        <a href='/sobre'><h3 className='text-white'>Sobre</h3></a>
                        <h3 className='text-white'>Rodízio</h3>
                        <h3 className='text-white'>Cardápio</h3>
                        <h3 className='text-white'>Contato</h3>
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
