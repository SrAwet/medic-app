import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export const CarouselClinic = () => {
  return (
    <Carousel showThumbs={false}>
                <div>
                  <img src="https://hogarescreaelsalvador.com/wp-content/uploads/2015/01/Clinica-asistencial-9.jpg" alt="clinica-1" />
                </div>
                <div>
                  <img src="https://hogarescreaelsalvador.com/wp-content/uploads/2015/01/Clinica-asistencial-10.jpg" alt="clinica-2" />
                </div>
                <div>
                  <img src="https://hogarescreaelsalvador.com/wp-content/uploads/2015/01/Clinica-asistencial-12.jpg" alt="clinica-3" />
                </div>
                <div>
                  <img src="https://hogarescreaelsalvador.com/wp-content/uploads/2015/01/Clinica-asistencial-11.jpg" alt="clinica-4" />
                </div>
    </Carousel>
  )
}
