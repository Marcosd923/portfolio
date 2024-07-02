"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export const MainSection = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <main>
      <section className="ml-12 sm:ml-28 mt-20 md:mb-32 md:ml-44 xl:ml-60 fade-in">
        <div className="flex flex-col gap-1 pt-28 w-full">
          <h1
            // data-aos="fade-down"
            // data-aos-duration="1000"
            className="  text-naranja w-full  text-lg xl:text-2xl block "
          >
            Hola, me llamo
          </h1>
          <h2
            // data-aos="fade-down"
            // data-aos-duration="1200"
            className=" text-gris font-mono text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold mt-3 block"
          >
            Marcos Daut.
          </h2>
          <h3
            // data-aos="fade-down"
            // data-aos-duration="1400"
            className="text-grismedio font-bold font-mono text-3xl sm:text-4xl md:text-5xl xl:text-5xl block"
          >
            Tu idea, mi experiencia digital.
          </h3>
          <p className="w-1/2 mt-4 text-grismedio font-sans text-lg">
            Programador web full stack de Argentina. Especializado en el
            desarrollo de aplicaciones excepcionales.
          </p>
          <Link
            href={"https://wa.me/5492477336490"}
            target="_blank"
            className="text-blanco text-base  bg-naranja rounded-md px-4 py-1.5 mt-10 w-32 text-center"
          >
            Contactame!
          </Link>
        </div>
      </section>
    </main>
  );
};
