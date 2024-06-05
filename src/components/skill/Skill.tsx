import React from "react";
import NextIcon from "../icons/next/NextIcon";
import MongoDB from "../icons/mongodb/MongoDB";
import ReactIcon from "../icons/react/ReactIcon";
import NodejsIcon from "../icons/nodejs/NodejsIcon";
import CssIcon from "../icons/cssicono/CssIcon";
import JavaScript from "../icons/jsicono/JsIcon";
import TypeScript from "../icons/typescriptIcono/TypescriptIcon";
import TailwindCSS from "../icons/tailwind/TailwindIcon";
import MySQL from "../icons/mysql/MySQL";
import Express from "../icons/express/Express";
import Sequelize from "../icons/sequealize/Sequelize";
import Prisma from "../icons/prisma-icon/Prisma";

export const Skill = () => {
  return (
    <section
      id="skill"
      className="flex w-full flex-col gap-8 mb-20  items-center justify-center px-2 sm:px-0 "
    >
      <h1
        //   data-aos="fade-down"
        //   data-aos-duration="1000"
        className="font-bold mt-20 mb-14 text-grisclaro text-3xl  flex justify-center  before:content-['02.'] before:text-naranja divide-y-0"
      >
        Habilidades
      </h1>
      <article className="mx-auto flex w-full max-w-lg flex-col gap-2 sm:max-w-xl xl:max-w-2xl">
        <div className="grid grid-cols-3 md:grid-cols-4 font-mono text-blanco ">
          <button className="flex flex-col items-center gap-3 py-6 grayscale hover:grayscale-0 text-grismedio hover:text-blanco hover:scale-[1.1] transition-all duration-300">
            <NextIcon className=" h-9 w-9 " />
            <p className="text-center text-xs md:text-sm font-semibold ">
              Next JS
            </p>
          </button>
          <button className="flex flex-col items-center gap-3 py-6 grayscale hover:grayscale-0 text-grismedio hover:text-blanco hover:scale-[1.1] transition-all duration-300">
            <MongoDB className=" h-8 w-8 " />
            <p className="text-center text-xs md:text-sm font-semibold ">
              Mongo DB
            </p>
          </button>
          <button className="flex flex-col items-center gap-3 py-6 grayscale hover:grayscale-0 text-grismedio hover:text-blanco hover:scale-[1.1] transition-all duration-300">
            <ReactIcon className=" h-8 w-8" />
            <p className="text-center text-xs md:text-sm font-semibold ">
              React
            </p>
          </button>
          <button className="flex flex-col items-center gap-3 py-6 grayscale hover:grayscale-0 text-grismedio hover:text-blanco hover:scale-[1.1] transition-all duration-300">
            <NodejsIcon className="  h-8 w-8" />
            <p className="text-center text-xs md:text-sm font-semibold ">
              Node.js
            </p>
          </button>
          <button className="flex flex-col items-center gap-3 py-6 grayscale hover:grayscale-0 text-grismedio hover:text-blanco hover:scale-[1.1] transition-all duration-300">
            <CssIcon className="  h-8 w-8" />
            <p className="text-center text-xs md:text-sm font-semibold ">CSS</p>
          </button>
          <button className="flex flex-col items-center gap-3 py-6 grayscale hover:grayscale-0 text-grismedio hover:text-blanco hover:scale-[1.1] transition-all duration-300">
            <JavaScript className="  h-8 w-8" />
            <p className="text-center text-xs md:text-sm font-semibold ">
              Javascript
            </p>
          </button>
          <button className="flex flex-col items-center gap-3 py-6 grayscale hover:grayscale-0 text-grismedio hover:text-blanco hover:scale-[1.1] transition-all duration-300">
            <TypeScript className="  h-8 w-8" />
            <p className="text-center text-xs md:text-sm font-semibold ">
              Javascript
            </p>
          </button>
          <button className="flex flex-col items-center gap-3 py-6 grayscale hover:grayscale-0 text-grismedio hover:text-blanco hover:scale-[1.1] transition-all duration-300">
            <TailwindCSS className="  h-8 w-8" />
            <p className="text-center text-xs md:text-sm font-semibold ">
              TailwindCSS
            </p>
          </button>
          <button className="flex flex-col items-center gap-3 py-6 grayscale hover:grayscale-0 text-grismedio hover:text-blanco hover:scale-[1.1] transition-all duration-300">
            <MySQL className="  h-8 w-8" />
            <p className="text-center text-xs md:text-sm font-semibold ">
              MySQL
            </p>
          </button>
          <button className="flex flex-col items-center gap-3 py-6 grayscale hover:grayscale-0 text-grismedio hover:text-blanco hover:scale-[1.1] transition-all duration-300">
            <Express className="  h-8 w-8" />
            <p className="text-center text-xs md:text-sm font-semibold ">
              Express
            </p>
          </button>
          <button className="flex flex-col items-center gap-3 py-6 grayscale hover:grayscale-0 text-grismedio hover:text-blanco hover:scale-[1.1] transition-all duration-300">
            <Sequelize className="  h-8 w-8" />
            <p className="text-center text-xs md:text-sm font-semibold ">
              Sequelize
            </p>
          </button>
          <button className="flex flex-col items-center gap-3 py-6 grayscale hover:grayscale-0 text-grismedio hover:text-blanco hover:scale-[1.1] transition-all duration-300">
            <Prisma className="  h-8 w-8" />
            <p className="text-center text-xs md:text-sm font-semibold ">
              Prisma
            </p>
          </button>
        </div>
      </article>
    </section>
  );
};
