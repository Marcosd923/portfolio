"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const About = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section id="sobre-mi">
      <div className="flex flex-col  ">
        <h1
          //   data-aos="fade-down"
          //   data-aos-duration="1000"
          className="font-bold md:w-full mx-auto  text-grisclaro text-3xl mt-20 mb-24 flex xl:flex-row  max-w-3xl lg:max-w-4xl xl:max-w-5xl px-2 sm:px-4 md:px-6 before:content-['01.'] before:text-naranja divide-y-0"
        >
          Sobre mi
        </h1>

        <article
          // data-aos="fade-right"
          // data-aos-duration="1000"
          className=" flex gap-5 md:w-full mx-auto  font-sans flex-col xl:flex-row-reverse max-w-3xl lg:max-w-4xl  xl:max-w-5xl px-2 sm:px-4 md:px-6"
        >
          <div className=" flex max-w-lg  flex-col gap-5 xl:max-w-md mx-auto ">
            <Image
              //   data-aos="fade-left"
              //   data-aos-duration="1000"
              className="rounded-full border-8 justify-items-center md:ml-12 mb-10 md:mb-0 border-grisoscuro hover:filter-none animate-profile grayscale duration-300 bg-no-repeat "
              src={"/imgs/marcos.jpg"}
              alt={"Marcos Daut"}
              width={200}
              height={200}
            />
          </div>
          <div className="text-grismedio flex max-w-xl flex-col sm:max-w-prose md:max-w-xl lg:max-w-3xl mx-auto xl:mx-0 xl:max-w-[39rem] xl:justify-between text-base lg:text-lg">
            <p className="text-justify px-6 sm:px-0 sm:text-left mb-3">
              ¡Hola! Mi nombre es Marcos y me considero una persona a la cual le
              gusta aprender e ir en búsqueda de nuevos desafíos. Me recibí de
              Programador Web Full Stack en el 2023 y actualmente estoy
              aprenendiendo React y NextJS buscando expandir mis habilidades y
              crear increibles experiencias digitales.
            </p>

            <p className="text-justify px-6 sm:px-0 sm:text-left mb-3">
              Capaz de trabajar en equipo y con facilidad para insertarme en
              ambientes laborales.
            </p>

            <p className="text-justify px-6 sm:px-0 sm:text-left mb-3">
              Actualmente espero poder desarrollarme como profesional y
              desempeñar mis habilidaedes.
            </p>

            <p className="text-justify px-6 sm:px-0 sm:text-left mb-2">
              Estas son algunas de las ultimas tecnologias con las que estuve
              trabajando:
            </p>
            <br />

            <ul className="grid grid-cols-2 text-justify px-6 sm:px-0">
              <li className="before:content-['▹'] before:text-naranja">
                JavaScript (ES+6)
              </li>
              <li className="before:content-['▹'] before:text-naranja">
                React
              </li>
              <li className="before:content-['▹'] before:text-naranja">
                Next JS
              </li>
              <li className="before:content-['▹'] before:text-naranja">
                Node JS
              </li>
              <li className="before:content-['▹'] before:text-naranja">
                TypeScript
              </li>
              <li className="before:content-['▹'] before:text-naranja">
                PostgreSQL
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};
