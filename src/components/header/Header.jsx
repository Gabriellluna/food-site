import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './header.css'
import './nav.css'
import { useSearchParams } from 'react-router-dom';

const Header = () => {

  const [show, setShow] = useState(false)
  const vh100 = window.innerHeight;
  const [menuActive, setMenuActive] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > vh100) {
        setShow(true)
      } else {
        setShow(false)
      }
    });

  }, [])

  const setActive = () => {
    setMenuActive(prev => !prev)
  };

  return (
    <div>
      <div className='header-container' >
        <Swiper
          className='cards'
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide className='card'>
            <img src='images/dish1.jpg'></img>
          </SwiperSlide>
          <SwiperSlide className='card'>
            <img src='images/dish2.jpg'></img>
          </SwiperSlide>
        </Swiper>
        <h1 className='slogan text-white'>Precisão no corte, excelência no sabor</h1>
        <div className={`navigation justify-content-between ${show === true ? 'navigation--solid' : null}`}>
          <img className='logo-img' alt='logo aqui' src='images/logo.png'></img>
          <div className='nav'>
            <a href="/"><h3 className='text-white'>Home</h3></a>
            <a href='/sobre'><h3 className='text-white'>Sobre</h3></a>
            <a href='/cardapio'><h3 className='text-white'>Cardápio</h3></a>
            <a href="/contato"><h3 className='text-white'>Contato</h3></a>
          </div>
          <div className='menu-mobile-container'>
            <div className="menu-mobile" onClick={setActive} style={{ display: `${menuActive ? "none" : "flex"}` }}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className={`nav-list ${menuActive ? 'open' : ''}`}>
              <div
                className="list"
              >
                <div>
                  <a href="/"><h3 className='text-white'>Home</h3></a>
                  <a href='/sobre'><h3 className='text-white'>Sobre</h3></a>
                  <a href='/cardapio'><h3 className='text-white'>Cardápio</h3></a>
                  <a href="/contato"><h3 className='text-white'>Contato</h3></a>
                </div>
                <i class="fa-solid fa-x" onClick={setActive}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
