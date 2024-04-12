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
    <section>
      <div className="flex-col ">
        <h1
          //   data-aos="fade-down"
          //   data-aos-duration="1000"
          className="font-bold text-grisclaro text-3xl mt-52 mb-10 ml-80 before:content-['01.'] before:text-naranja divide-y-0"
        >
          Sobre mi
        </h1>
        <div className="flex  mb-20 w-2/3  ">
          <div
            // data-aos="fade-right"
            // data-aos-duration="1000"
            className=" text-grismedio ml-80 w-1/2 mb-10 font-sans"
          >
            <p>
              ¡Hola! Mi nombre es Marcos y me considero una persona a la cual le
              gusta aprender e ir en búsqueda de nuevos desafíos. Me recibí de
              Programador Web Full Stack en el 2023 y actualmente estoy
              aprenendiendo React y NextJS buscando expandir mis habilidades y
              crear increibles experiencias digitales.
            </p>
            <br />
            <p>
              Capaz de trabajar en equipo y con facilidad para insertarme en
              ambientes laborales.
            </p>
            <br />
            <p>
              Actualmente espero poder desarrollarme como profesional y
              desempeñar mis habilidaedes.
            </p>
            <br />
            <p>
              Estas son algunas de las ultimas tecnologias con las que estuve
              trabajando:
            </p>
            <br />

            <ul className="grid grid-cols-2">
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
          <div className="mr-6">
            <Image
              //   data-aos="fade-left"
              //   data-aos-duration="1000"
              className="rounded-md "
              src={"/imgs/marcos.jpg"}
              alt={""}
              width={180}
              height={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
