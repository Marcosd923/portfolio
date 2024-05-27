"use client";

import { IconBrandWhatsapp, IconMail, IconMapPin } from "@tabler/icons-react";
import Link from "next/link";
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
        className="grid sm:grid-cols-2  gap-16 p-8 mx-auto max-w-sm sm:max-w-lg md:max-w-3xl lg:max-w-4xl
        bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md
        text-[#333] font-[sans-serif]"
      >
        <div className="ml-3">
          <div className=" text-4xl font-extrabold text-blanco">Hablemos!</div>
          <p className="flex py-4  text-sm text-grismedio">
            Tenes alguna idea o marca que desarrollar? Mandame un mensaje y lo
            conversamos. Me encantaría conocer tu proyecto y poder ayudarte.
          </p>
          <div className="mt-3">
            <Link
              href={"https://wa.me/5492477336490"}
              className="flex items-center text-grismedio hover:text-blanco"
              target="_blank"
            >
              <IconBrandWhatsapp className="w-8 h-8 my-3" />
              <p className="ml-2 ">+54 9 2477336490</p>
            </Link>
            <Link
              href={
                "https://www.google.com/maps/place/Rosario,+Santa+Fe/@-32.9521011,-60.8614495,11z/data=!3m1!4b1!4m6!3m5!1s0x95b6539335d7d75b:0xec4086e90258a557!8m2!3d-32.9587022!4d-60.6930416!16zL20vMDJ0YjE3?entry=ttu"
              }
              className="flex items-center text-grismedio hover:text-blanco"
              target="_blank"
            >
              <IconMapPin className="w-8 h-8 my-3" />
              <p className="ml-2 ">Rosario, Santa Fe, Argentina</p>
            </Link>
            <Link
              href={"#"}
              className="flex items-center  text-grismedio hover:text-blanco"
              target="_blank"
            >
              <IconMail className="w-8 h-8 my-3 " />
              <p className="ml-2">marcos.daut@gmail.com</p>
            </Link>
          </div>
        </div>

        <form
          action="https://formspree.io/f/mbjneabw"
          method="POST"
          onSubmit={handleSubmit}
          className="grid gap-y-0 mr-3"
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
