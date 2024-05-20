import React from "react";
import { Form } from "../form/Form";

export const Contact = () => {
  return (
    <section id="contacto">
      <div className="w-full mx-auto max-w-3xl lg:max-w-4xl  px-3 sm:px-4 md:px-6 text-end  justify-center ">
        <div className=" bg-grisclaro rounded-sm w-full mx-auto h-px flex items-center"></div>
        <h1 className="font-bold text-grisclaro text-3xl   w-full my-10 before:content-['04.'] before:text-naranja divide-y-0 ">
          Contacto
        </h1>
      </div>
      <article className="  w-full mx-auto font-sans max-w-3xl lg:max-w-4xl px-3 sm:px-4 md:px-6">
        <div className="text-grismedio  text-base lg:text-lg">
          <p className="text-end">
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
