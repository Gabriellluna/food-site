import React, { useEffect, useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import './Footer.css'
import { useSearchParams } from 'react-router-dom';

const Footer = () => {
  return (
    <>
        <div className='black-bg'>
            <div>
                <p>© 2026 Comida Oriental & Talls. Todos os direitos reservados.</p>
            </div>
            <div>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-whatsapp"></i>
            </div>
        </div>
    </>
  );
};

export default Footer;
