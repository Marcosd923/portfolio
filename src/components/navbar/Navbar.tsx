"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  IoAccessibility,
  IoAlbums,
  IoBriefcase,
  IoCloseOutline,
  IoMenu,
  IoPerson,
  IoPersonOutline,
} from "react-icons/io5";
import { useUIStore } from "@/store";
import clsx from "clsx";

export const Navbar = () => {
  const isSideMenuOpen = useUIStore((store) => store.isSideMenuOpen);
  const closeMenu = useUIStore((store) => store.closeSideMenu);

  const openSideMenu = useUIStore((state) => state.openSideMenu);

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <header className="w-screen h-20 z-20 fized flex justify-center items-center backdrop-blur-[10px] animate-fade-in-down duration-500 px-4 md:px-8">
      <nav className="w-full h-full flex items-center justify-between max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl ">
        <a>
          <Image
            className=""
            src={"/imgs/hex-icono-principal.png"}
            alt={""}
            height={60}
            width={60}
          />
        </a>

        <ul className="hidden md:flex gap-7 lg:gap-3">
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
        </ul>
        <div className="hidden md:flex  ">
          <a
            data-aos="fade-down"
            data-aos-duration="1000"
            href="/"
            className=" text-grisclaro rounded-lg  transition-all  border-4 border-naranja p-2 hover:-translate-x-1 hover:-translate-y-1 "
          >
            {" "}
            Curriculum
          </a>
        </div>
        {/* {menu en mobile} */}

        <IoMenu
          color="#F95738"
          size={50}
          className="md:hidden sm:flex absolute top-5 right-9 cursor-pointer"
          onClick={openSideMenu}
        ></IoMenu>

        <div>
          {isSideMenuOpen && (
            <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-negro opacity-30 "></div>
          )}
          {isSideMenuOpen && (
            <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-md"></div>
          )}
          <div
            className={clsx(
              "fixed p-5 right-0 top-0 w-[350px] h-screen bg-azul z-20 shadow-2xl tranform transition duration-300",
              { "translate-x-full": !isSideMenuOpen }
            )}
          >
            <IoCloseOutline
              color="#475569"
              size={50}
              className="absolute top-5 right-5 cursor-pointer "
              onClick={() => closeMenu()}
            />
            <Link
              href={"/"}
              className="flex items-center mt-10 p-2 rounded transition-all"
            >
              <IoAccessibility size={30} color="#F95738" />
              <span className="ml-3 text-xl text-grisclaro hover:text-naranja">
                Sobre mi
              </span>
            </Link>
            <Link
              href={"/"}
              className="flex items-center mt-10 p-2 rounded transition-all"
            >
              <IoAlbums size={30} color="#F95738" />
              <span className="ml-3 text-xl text-grisclaro hover:text-naranja">
                Proyectos
              </span>
            </Link>
            <Link
              href={"/"}
              className="flex items-center mt-10 p-2 rounded transition-all"
            >
              <IoBriefcase size={30} color="#F95738" />
              <span className="ml-3 text-xl text-grisclaro hover:text-naranja">
                Servicios
              </span>
            </Link>
            <Link
              href={"/"}
              className="flex items-center mt-10 p-2 rounded transition-all"
            >
              <IoPerson size={30} color="#F95738" />
              <span className="ml-3 text-xl text-grisclaro hover:text-naranja">
                Contacto
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
