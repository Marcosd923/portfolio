import React from "react";

export const Form = () => {
  return (
    <section className="flex justify-center text-grismedio mt-20 ">
      <form action="" className="  grid gap-y-0">
        <label htmlFor="name" className="text-blanco text-lg">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ingrese su nombre"
          className="rounded-md w-72 mb-2 font-sans pl-2 p-1 text-sm py-2"
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
    </section>
  );
};
