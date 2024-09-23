import React from 'react';
import './styles/MediaMainSlider.scss';
import Slider from 'react-slick';
import Leeve_breaks from '../images/Media_Thumbnails/Leeve_breaks.jpg';
import Concurso from '../images/Media_Thumbnails/Concurso.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const MediaMainSlider = () => {
    const settings = {
        dots: false, // Mostrar puntos de navegación
        infinite: true, // Bucle infinito
        speed: 1200, // Velocidad de transición
        slidesToShow: 1, // Mostrar una imagen a la vez
        slidesToScroll: 1, // Desplazar una imagen a la vez
        autoplay: true, // Activar el autoplay
        autoplaySpeed: 6000, // 3 segundos entre cambios de imagen
        arrows: true, // Mostrar las flechas de navegación
        pauseOnHover: true, // Autoplay no se detiene al pasar el mouse
      };

  return (
    <div className='media-main-slider'>
      <div className='media-main-slider__slider-container'>
        <Slider {...settings}>
          <div>
            <img src={Leeve_breaks} alt="Leeve breaks" />
          </div>
          <div>
            <img src={Concurso} alt="Concurso" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

