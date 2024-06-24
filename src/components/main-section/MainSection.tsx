"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const MainSection = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <main>
      <section className="ml-12 sm:ml-28 mt-20 md:mb-40 md:ml-44 xl:ml-60 fade-in">
        <div className="flex flex-col gap-1 pt-28 w-full">
          <h1
            // data-aos="fade-down"
            // data-aos-duration="1000"
            className="  text-naranja w-full  text-lg xl:text-2xl block "
          >
            Hola, mi nombre es
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
            className="text-grismedio font-bold font-mono text-3xl sm:text-4xl md:text-5xl xl:text-6xl block"
          >
            Soy Programador Web Full Stack.
          </h3>
          <p
            // data-aos="fade-down"
            // data-aos-duration="1600"
            className="w-1/2 mt-4 text-grismedio font-sans"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut earum
            distinctio amet nobis beatae natus adipisci, accusantium labore! Quo
            nobis itaque porro quisquam! Laboriosam dignissimos corrupti ipsam
            perferendis, sed at?
          </p>
        </div>
      </section>
    </main>
  );
};
