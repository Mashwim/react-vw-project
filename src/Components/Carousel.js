import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../StyleSheets/Carousel.css';
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const items = [
  {
    name:'Porsche type 12',
    img:'Porsche_type12',
    version:'Prototipo 1931._',
    text:'Porsche Company ya se encontraba en las primeras etapas de desarrollo del diseño de un automóvil que fuera asequible, eficiente y práctico tanto para el consumidor como para el fabricante. El Type 12 que Porsche desarrolló con Zundapp tenía un motor radial de 5 cilindros refrigerado por agua.',
  },
  {
    name:'Mercedes Benz W28',
    img:'Mercedes_Benz_W28_170H',
    version:'Convertible 1936',
    text:'En 1936, Daimler-Benz AG introdujo la Mercedes-Benz 170 H en paralelo al Mercedes-Benz 170 V con el mismo motor situado en posición delantera. El 170 H utilizaba un motor longitudinal trasero refrigerado por agua de 1697 cc motor con 38 PS (28 kW). La denominación "H" hacía referencia a la posición "Heckmotor" (trasero) del motor. El coche era significativamente más caro que el 170 V (el sedán de dos puertas costaba 3750 RM, frente a los 4350 RM del 170 H ), ofreciendo sin embargo un maletero de mucha menor capacidad y un comportamiento peor (aunque mejor que el del 130).'
  },
  {
    name:'Volkswagen Cabriolet',
    img:'Volkswagen_Cabriolet_1960',
    version:'Descapotable 1960',
    text:'El primer modelo descapotable se lanzó en 1949, un biplaza Hebmüller-Cabriolet que fue producido hasta la quiebra del fabricante o, según otras fuentes, la destrucción de la planta por un incendio en 1953. Hebmüller fabricó a partir de marzo de 1949 un total de 696 ejemplares, hoy en día son sumamente codiciados. El Escarabajo Cabriolet 4 plazas (Tipo 15) comenzó su producción en 1949 por Karmann en Osnabrück. Fue en 1948 cuando Wilhelm Karmann compró un sedán escarabajo de Volkswagen y lo convirtió en un convertible de cuatro plazas. Después de presentarlo con éxito a Volkswagen en Wolfsburg, la producción comenzó en 1949.'
  },
  {
    name:'Volkswagen 1949',
    img:'1_ventana_dividida_1949',
    version:'Tipo 1 con ventana dividida',
    text:'Mucho del diseño del Tipo 1 se parece al Tatra de Hans Ledwinka, en particular del modelo T97, que poseía las mismas características del Tipo 1, el mismo tipo de motor, el perfil y el tipo de refrigeración. Tatra presentó una demanda legal, pero ésta se detuvo cuando Alemania invadió Checoeslovaquia. El caso fue reabierto después de la Guerra y en 1961 Volkswagen pagó a Tatra 3.000.000 de marcos alemanes en compensación,​ lo que penalizó el desarrollo del Tipo 1 a lo largo de la década siguiente.'
  }
  ];

  const Carousel = () => {
    const sliderRef = useRef(null);

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      adaptiveHeight: true
      
    };

    const handleNext = () => {
      sliderRef.current.slickNext();
    };
  
    const handlePrev = () => {
      sliderRef.current.slickPrev();
    };
  
    return (
      <>
        <h2 className='text-center font-serif text-white text-3xl pb-5 lg:p-0'>Galeria</h2>
        <Slider ref={sliderRef} arrows={false} {...settings}>
        {items.map((item, index) => (
          <div className='px-4 font-serif text-white' key={index} >
            <div className='flex flex-col justify-center items-center lg:flex-row' style={{minHeight:430}}>
              <div className='px-2 lg:w-2/4 '>
                <img className='rounded-lg mx-auto max-w-md w-full' src={require(`../img/Type_${item.img}.jpg`)} alt={`${index + 1}`} />
              </div>
              <div className=' text px-4 lg:w-2/4 md:px-7'>
                <h2 className='text-center text-lg pb-2'>{item.name}</h2>
                <h3 className='pb-2'>{item.version}</h3>
                <p className='text-base text-justify indent-8 lg:pr-7'>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className='button pb-8 text-white'>
      <BsArrowLeftCircle className="bottom-0 ml-[2%] rounded-full text-4xl hidden md:block" onClick={handlePrev} />
      <BsArrowRightCircle className="bottom-0  right-0 mr-8 rounded-full text-4xl hidden md:block" onClick={handleNext} />
      </div>
      </>
    );
  };

  export default Carousel;