"use client";

import { IconBrandWhatsapp, IconMail, IconMapPin } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const Form = () => {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const response = await fetch("https://formspree.io/f/mbjneabw", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (!response.ok) {
      setMessage(
        result.errors.map((error: { message: any }) => error.message).join(", ")
      );
      return false;
    }
    setMessage("Se ha enviado tu correo satisfactoriamente ✔");
    reset();
  };
  return (
    <section className="mt-8 ">
      <div
        className="grid sm:grid-cols-2 gap-4 sm:gap-14 p-8 mx-auto max-w-sm sm:max-w-lg md:max-w-3xl lg:max-w-4xl
        bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md
        text-[#333] font-[sans-serif]"
      >
        <div className="ml-3">
          <div className="text-center sm:text-left text-5xl font-extrabold text-blanco ">
            Trabajemos juntos!
          </div>
          <p className=" text-center sm:text-left py-4  text-sm text-grismedio">
            Tenes alguna idea o marca que desarrollar? Mandame un mensaje y lo
            hablamos. Me encantaría conocer tu proyecto!
          </p>
          <div className="hidden sm:grid mt-3">
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

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-0 p-2">
          <label htmlFor="name" className="text-grisclaro text-md">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "El nombre es obligatorio ",
              minLength: 3,
            })}
            placeholder="Ingrese su nombre"
            className="rounded-md mb-2 font-sans pl-2 p-1 text-sm py-2"
          />
          {errors.name && <p className="text-naranja">{errors.name.message}</p>}

          <label htmlFor="email" className="text-grisclaro text-md">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Formato de email inválido",
              },
            })}
            placeholder="Ejemplo@email.com"
            className="rounded-md mb-2 font-sans pl-2 p-1 text-sm py-2"
          />
          {errors.email && (
            <p className="text-naranja">{errors.email.message}</p>
          )}

          <label htmlFor="message" className="text-grisclaro text-md">
            Mensaje
          </label>
          <textarea
            id="message"
            {...register("message", {
              required: "El mensaje es obligatorio",
            })}
            placeholder="Escriba su mensaje aquí"
            className="rounded-md mb-2 font-sans pl-2 py-2 text-sm h-20"
          />
          {errors.message && (
            <p className="text-naranja">{errors.message.message}</p>
          )}

          <button
            type="submit"
            className="rounded-md bg-naranja hover:bg-naranjaoscuro text-blanco mt-6 py-1 px-16 mx-auto justify-center"
          >
            Enviar
          </button>
          <p className="text-blanco text-center pt-2 ">{message} </p>
        </form>
      </div>
    </section>
  );
};
