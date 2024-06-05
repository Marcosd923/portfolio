import React from "react";
import { Form } from "../form/Form";

export const Contact = () => {
  return (
    <section id="contacto">
      <div className="w-full flex mx-auto max-w-3xl lg:max-w-4xl  px-3  md:px-0 text-center sm:text-end justify-between items-center">
        <h1 className="font-bold text-grisclaro text-3xl mt-20 mb-6  w-full  before:content-['04.'] before:text-naranja divide-y-0 ">
          Contacto
        </h1>
      </div>
      <article className="  w-full mx-auto font-sans max-w-3xl lg:max-w-4xl px-3  md:px-0">
        <div className="text-grismedio  text-base lg:text-lg">
          <p className=" text-justify px-6 sm:px-0 sm:text-end ">
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
