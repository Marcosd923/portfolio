"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Navbar = () => {
  const [isClick, setisClick] = useState(false);

  const toogleNavbar = (): void => {
    setisClick(!isClick);
  };

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <nav className="flex px-10 py-7 justify-between items-center w-full  top-0 bg-azul shadow-sm ">
        <div className="ml-3">
          <Link href={"/"} data-aos="fade-down" data-aos-duration="400">
            <Image
              className="absolute -z-1 "
              src={"/imgs/hex-icono.png"}
              alt={""}
              height={60}
              width={60}
            />

            <div>
              <Image
                className="absolute z-1 hover:-translate-x-0.5 hover:-translate-y-0.5"
                src={"/imgs/hex-icono-principal.png"}
                alt={""}
                height={60}
                width={60}
              />
            </div>
          </Link>
        </div>
        <div className="hidden sm:block ">
          <div className="flex m-2">
            <a
              data-aos="fade-down"
              data-aos-duration="200"
              href="/"
              className="p-2 text-grisclaro  hover:text-naranja before:content-['01.'] before:text-naranja "
            >
              {" "}
              Sobre mi
            </a>
            <a
              data-aos="fade-down"
              data-aos-duration="400"
              href="/"
              className="  p-2 text-grisclaro  hover:text-naranja before:content-['02.'] before:text-naranja"
            >
              {" "}
              Proyectos
            </a>
            <a
              data-aos="fade-down"
              data-aos-duration="600"
              href="/"
              className="  p-2 text-grisclaro  hover:text-naranja before:content-['03.'] before:text-naranja"
            >
              {" "}
              Servicios
            </a>
            <a
              data-aos="fade-down"
              data-aos-duration="800"
              href="/"
              className="  p-2 text-grisclaro  hover:text-naranja before:content-['04.'] before:text-naranja"
            >
              {" "}
              Contacto
            </a>
            <div className=" flex  ">
              <a
                data-aos="fade-down"
                data-aos-duration="1000"
                href="/"
                className=" text-grisclaro rounded-lg  transition-all ml-3 border-4 border-naranja p-2 hover:-translate-x-1 hover:-translate-y-1 "
              >
                {" "}
                Curriculum
              </a>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-grisclaro hover:text-grisclaro focus:outline-none focus:ring-2 focus:ring-inset rocus:ring-white"
              onClick={toogleNavbar}
            >
              {isClick ? (
                <svg
                  className="h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
