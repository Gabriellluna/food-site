import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import './Nav.css'

const Nav = ({ name }) => {

    const [menuActive, setMenuActive] = useState(false)

    const setActive = () => {
        setMenuActive(prev => !prev)
    };


    return (
        <>
            <div>
                <div className='navigator' style={{ backgroundImage: `url(./images/dish6.jpg)` }} >
                    <div className='navigator-content'>
                        <a href='/'><img alt='logo aqui' src='images/logo.png'></img></a>
                        <div className='nav'>
                            <a href="/"><h3 className='text-white'>Home</h3></a>
                            <a href='/sobre'><h3 className='text-white'>Sobre</h3></a>
                            <a href="/cardapio"><h3 className='text-white'>Cardápio</h3></a>
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
                    <div className='col-lg-12 d-flex justify-content-center align-items-center page-name'>
                        <h1>{name}</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
