import React from 'react';
import './styles/MediaPage.scss';
import { Header } from '../components/Header';
import { NavigationBar } from '../components/NavigationBar';
import { MediaMainSlider } from '../components/MediaMainSlider';

export const MediaPage = () => {
  return (
    <div className='media-page'>
      <Header />
      <NavigationBar />
      <MediaMainSlider />
      <div className='media-page__leeve-breaks'>
        <h2>Sesión de garaje de Leeve Breaks</h2>
        <p>En la casa de uno de los integrantes de Leeve Breaks, un ambiente desenfadado y lleno de carácter se convierte en el escenario perfecto para grabar su nuevo EP, capturando la esencia cruda y auténtica de su música. Las paredes están adornadas con recuerdos de conciertos pasados, mientras que el eco de los tambores resonando en cada rincón crea una atmósfera electrizante y vibrante. La mezcla de sonidos se convierte en una experiencia sensorial que envuelve a todos los presentes.</p>

        <p>Los miembros de la banda, cada uno con su estilo único, se mueven entre risas y bromas, creando una camaradería palpable que refleja su pasión compartida por la música. El olor a madera, metal y un toque de café recién hecho se mezcla con la intensidad de la creatividad desenfrenada, transformando la casa en un santuario donde las preocupaciones del mundo exterior quedan atrás. En un rincón, un viejo amplificador emite un sonido crujiente que evoca la nostalgia de las primeras influencias musicales de la banda, mientras que la luz del sol se filtra a través de las ventanas, iluminando el polvo que danza en el aire.</p>

        <p>A medida que comienzan a tocar, la libertad de expresarse sin restricciones se siente en cada acorde. Cada miembro aporta su propio toque, desde los riffs melódicos de la guitarra hasta los ritmos contundentes de la batería, creando una sinfonía de sonidos que cobra vida en el momento. Con cada riff y verso que se graba, el proceso se convierte en un ritual de creación, un momento decisivo que trasciende el simple acto de grabar. Este espacio, con sus muebles eclécticos, se convierte en un refugio donde la juventud y la rebeldía se encuentran, dando a luz a sonidos extraordinarios que encapsulan la esencia de lo que significa ser parte de Leeve Breaks.</p>

        <p>En medio de la grabación, hay pausas para intercambiar ideas y hacer ajustes, y cada discusión se llena de entusiasmo e inspiración. Las risas y las anécdotas compartidas entre tomas recuerdan a todos lo lejos que han llegado y lo que han construido juntos. En este ritual de creación, Leeve Breaks no solo busca grabar un álbum, sino también celebrar la amistad y la búsqueda de un sonido auténtico que resonará en el corazón de quienes lo escuchen. La casa, un simple hogar, se transforma en el epicentro de una experiencia musical que promete dejar una huella imborrable, convirtiéndose en un lugar donde la pasión por la música se encuentra con la calidez de la comunidad. Así, cada sesión de grabación se convierte en un capítulo más en la historia de la banda, un testimonio de su dedicación y su amor por el rock alternativo.</p>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kt1rjIq9qKU?start=1043"
          title="Video de Leeve Breaks"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
