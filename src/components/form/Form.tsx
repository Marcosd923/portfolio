"use client";

import { useState } from "react";

interface FormSubmitEvent extends React.FormEvent<HTMLFormElement> {}

interface FormError {
  message: string;
}

export const Form = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormSubmitEvent) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const response = await fetch(event.currentTarget.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    const result = await response.json();
    if (!response.ok) {
      setMessage(
        (result.errors as FormError[]).map((error) => error.message).join(", ")
      );
      return false;
    }
    setMessage("Se ha enviado tu correo satifactoriamente");
  };
  return (
    <section className="mt-20 ">
      <div
        className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-sm sm:max-w-lg md:max-w-3xl lg:max-w-4xl
        bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md
        text-[#333] font-[sans-serif]"
      >
        <div></div>
        <form
          action="https://formspree.io/f/mbjneabw"
          method="POST"
          onSubmit={handleSubmit}
          className="grid gap-y-0"
        >
          <label htmlFor="name" className="text-grisclaro text-md">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ingrese su nombre"
            className="rounded-md  mb-2 font-sans pl-2 p-1 text-sm py-2"
          />

          <label htmlFor="email" className="text-grisclaro text-md">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="rounded-md mb-2 font-sans pl-2 p-1 text-sm py-2"
            placeholder="Ejemplo@email.com"
          />

          <label htmlFor="message" className="text-grisclaro text-md">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            className="rounded-md mt-0.5 font-sans pl-2 p-0.5 text-sm h-20"
            placeholder="Escriba su mensaje aquí"
          />

          <button
            type="submit"
            className="rounded-md bg-naranja hover:bg-naranjaoscuro text-blanco mt-6  flex py-2 px-16 mx-auto justify-center"
          >
            Enviar
          </button>
          <p>{message}</p>
        </form>
      </div>
    </section>
  );
};
