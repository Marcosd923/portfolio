import React from "react";
import { Form } from "../form/Form";

export const Contact = () => {
  return (
    <section id="contacto">
      <div className="">
        <h1
          //   data-aos="fade-down"
          //   data-aos-duration="1000"
          className="font-bold text-grisclaro text-3xl  mb-10 flex justify-center  before:content-['04.'] before:text-naranja divide-y-0 "
        >
          Contacto
        </h1>
      </div>
      <article
        // data-aos="fade-right"
        // data-aos-duration="1000"
        className="  w-full mx-auto  font-sans   max-w-3xl lg:max-w-4xl  px-2 sm:px-4 md:px-6"
      >
        <div className="text-grismedio   sm:max-w-prose md:max-w-xl lg:max-w-3xl text-base lg:text-lg">
          <p className="text-center">
            Actualmente me encuentro en búsqueda de nuevas oportunidades,
            cualquier oferta será bien recibida. Si simplemente deseas hacerme
            una pregunta o saludarme, no dudes en ponerte en contacto conmigo.
          </p>
        </div>
      </article>
      <Form />
    </section>
  );
};
