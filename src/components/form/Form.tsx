import React from "react";

export const Form = () => {
  return (
    <section className="mt-20 ">
      <div
        className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-2xl
        bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md
        text-[#333] font-[sans-serif]"
      >
        <div></div>
        <form action="" className="  grid gap-y-0">
          <label htmlFor="name" className="text-blanco text-lg">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ingrese su nombre"
            className="rounded-md  mb-2 font-sans pl-2 p-1 text-sm py-2"
          />

          <label htmlFor="email" className="text-blanco text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="rounded-md mb-2 font-sans pl-2 p-1 text-sm py-2"
            placeholder="Ejemplo@email.com"
          />

          <label htmlFor="subjet" className=" text-blanco text-lg">
            Asunto
          </label>
          <input
            type="text"
            id="subjet"
            name="subjet"
            className="rounded-md mb-2 font-sans pl-2 p-0.5 text-sm py-2"
            placeholder="Coloque un asunto"
          />

          <label htmlFor="message" className="text-blanco text-lg">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            className="rounded-md mt-0.5 font-sans pl-2 p-0.5 text-sm h-16"
            placeholder="Escriba su mensaje aquí"
          />

          <button
            type="submit"
            className="rounded-md bg-azulmedio text-blanco mt-6  flex py-2 px-4 justify-center"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};
