import React from "react";

const contentData = [
  {
    id: 1,
    text: `El Volkswagen Tipo 1, conocido hoy en día como el "Escarabajo", tiene sus orígenes en la década de 1930. El proyecto se inició cuando Ferdinand Porsche, el renombrado ingeniero automotriz, fue contactado por la empresa Zündapp para desarrollar un automóvil asequible y eficiente. En 1931, se presentó el prototipo Porsche Tipo 12, un vehículo que sentó las bases para lo que más tarde se convertiría en el icónico Escarabajo.`,
    imageSrc: "./Ferdinand-Porsche.jpg",
    alt: "Ferdinand Porsche",
  },
  {
    id: 2,
    text: `En esta misma época, Alemania estaba bajo el régimen nazi de Adolf Hitler, quien tenía la visión de crear una red de autopistas llamada Autobahn para unificar al país. Sin embargo, la mayoría de la población alemana carecía de automóviles. Por lo tanto, surgió la necesidad de un automóvil asequible para el pueblo. Hitler se reunió con Ferdinand Porsche en 1933 y le encomendó la tarea de diseñar un "Volkswagen" o "coche del pueblo". El vehículo debía ser económico, capaz de transportar a una familia, y su costo no debía superar los 990 Reichsmarks. Además, debía ser fácil de mantener y presentar un diseño aerodinámico.`,
    imageSrc: "./Ferdinand-Hitler.jpg",
    alt: "Ferdinand Porsche y Adolf Hitler",
  },
  {
    id: 3,
    text: "El resultado de esta colaboración fue el desarrollo del Volkswagen Tipo 1, que se convirtió en el precursor del famoso Escarabajo. El diseño final conservó muchas de las características del Porsche Tipo 12 y estableció un legado duradero en la industria automotriz, convirtiéndose en uno de los automóviles más icónicos y reconocibles del mundo. A lo largo de los años, el Escarabajo ha experimentado diversas evoluciones y versiones, pero su diseño original sigue siendo apreciado y admirado hasta el día de hoy.",
    imageSrc: "./Ferdinand-Vw.jpg",
    alt: "Ferdinand y su creación",
  },
];

const History = () => {
  return (
    <section id='history' className="historySection pb-8 mt-20 px-6 text-white font-serif">
      <h1 className="text-center text-3xl pb-6 underline underline-offset-8 decoration-white">Historia del Volkswagen</h1>
      <div className="text-justify text-base flex flex-col gap-8 md:flex-row md:px-3">
        {contentData &&contentData.map((item) => (
          <article key={item.id} className="">
            <p className="pb-6 indent-8">{item.text}</p>
              <img
              className="rounded-lg mx-auto max-w-md w-full"
              src={item.imageSrc}
              alt={item.alt}
              />
          </article>
        ))}
      </div>
    </section>
  );
};

export default History;
