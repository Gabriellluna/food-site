import React, { useEffect } from 'react';
import './Call.css'

const Call = () => {


return (
    <>
        <div className='quick-links'>
            <a href='/contato'>
            <div className='links'>
                <i class="fa-solid fa-map-location"></i>
            </div>
            </a>
            <a href='/cardapio'>
                <div className='links'>
                    <i class="fa-solid fa-bowl-food"></i>
                </div>
            </a>
            <a href='/contato'>
                <div className='links'>
                    <i class="fa-solid fa-phone"></i>
                </div>
            </a>

        </div>

    </>
    );
};

export default Call;
