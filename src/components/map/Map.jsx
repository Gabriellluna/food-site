import React from 'react';
import './Map.css'

const Map = () => {

  return (
    <>
        <iframe className='map-iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7297190804884!2d-46.623642200000006!3d-23.578148799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59005e39d0d5%3A0x4b7c455cbca2b2e8!2sCOMIDA%20ORIENTAL%20%26%20TALLS!5e0!3m2!1spt-BR!2sbr!4v1771616086990!5m2!1spt-BR!2sbr" 
            // width="600" 
            // height="450" 
            style={{border:0}} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
                  
        </iframe>

    </>
  );
};

export default Map;