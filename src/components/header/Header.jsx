import React, { useEffect, useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './header.css'
import { useSearchParams } from 'react-router-dom';

const Header = () => {
  
  const [show, setShow] = useState(false)
  const header = document.getElementById('container');

  useEffect(() => {
    window.addEventListener('scroll', () => {
    if (window.scrollY > header ) {
      setShow(true)
    } else {
      setShow(false)
    }
  });

  }, [])


    useEffect(() => {
    console.log(show)
   })

  return (
    <>
      <div className='container' id='container'>
        <Swiper
        className='cards'
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{delay:3000}}
        >
          <SwiperSlide className='card'>
            <div >
              <img src='images/dish1.jpg'></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className='card'>
            <div >
              <img src='images/dish2.jpg'></img>
            </div>
          </SwiperSlide>
        </Swiper>
        <h1 className='slogan'>Precisão no corte, excelência no sabor</h1>
        <div className={`navigation justify-content-between ${show === true ? 'navigation--solid' : null}`}>
          <img alt='logo aqui' src='images/logo.png'></img>
          <div className='nav'>
            <h3>Home</h3>
            <a href='/sobre'><h3>Sobre</h3></a>
            <h3>Rodízio</h3>
            <h3>Cardápio</h3>
            <h3>Contato</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
