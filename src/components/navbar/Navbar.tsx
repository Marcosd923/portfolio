"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  IoAccessibility,
  IoAlbums,
  IoCloseOutline,
  IoGitBranch,
  IoMenu,
  IoPerson,
} from "react-icons/io5";
import { useUIStore } from "@/store";
import clsx from "clsx";

export const Navbar = () => {
  const isSideMenuOpen = useUIStore((store) => store.isSideMenuOpen);
  const closeMenu = useUIStore((store) => store.closeSideMenu);

  const openSideMenu = useUIStore((state) => state.openSideMenu);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // scroll down
        setShowNavbar(false);
      } else {
        // scroll up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
      setScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <header
      className={`w-screen py-3 z-20  fixed mx-2 md:mx-0 md:px-8 transition-transform duration-300 ${
        showNavbar
          ? `translate-y-0 opacity-100 backdrop-blur-md bg-opacity-70 ${
              scrollY > 0 ? "shadow-lg" : "shadow-none"
            }`
          : "-translate-y-full opacity-0 bg-opacity-100 shadow-none"
      }`}
    >
      <nav className="w-full h-full flex items-center  justify-between max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-full ">
        <div>
          <Link href={"#"}>
            <Image
              className=""
              src={"/imgs/hex-icono-principal.png"}
              alt={"Logo de Marcos Daut Dev"}
              height={60}
              width={60}
            />
          </Link>
        </div>

        <ul className="hidden md:flex gap-7 lg:gap-6">
          <Link
            data-aos="fade-down"
            data-aos-duration="200"
            href="#sobre-mi"
            className="p-2 text-grisclaro  hover:text-naranja before:content-['01.'] before:text-naranja "
          >
            {" "}
            Sobre mi
          </Link>
          <Link
            data-aos="fade-down"
            data-aos-duration="400"
            href="#proyectos"
            className="  p-2 text-grisclaro  hover:text-naranja before:content-['02.'] before:text-naranja"
          >
            {" "}
            Proyectos
          </Link>
          <Link
            data-aos="fade-down"
            data-aos-duration="600"
            href="#skill"
            className="  p-2 text-grisclaro  hover:text-naranja before:content-['03.'] before:text-naranja"
          >
            {" "}
            Habilidades
          </Link>
          <Link
            data-aos="fade-down"
            data-aos-duration="800"
            href="#contacto"
            className="  p-2 text-grisclaro  hover:text-naranja before:content-['04.'] before:text-naranja"
          >
            {" "}
            Contacto
          </Link>
        </ul>
        <div>
          <Link
            data-aos="fade-down"
            data-aos-duration="1000"
            target="_blank"
            href="https://drive.google.com/file/d/1Zvt90skTZPeOYyRxHeDDGn47gIywtCTO/view?usp=drive_link"
            className="hidden md:flex text-grisclaro rounded-lg  transition-all  border-4 border-naranja hover:bg-grisclaro hover:text-azul hover:font-bold p-2 hover:-translate-x-1 hover:-translate-y-1 mr-8 "
          >
            {" "}
            Curriculum
          </Link>
        </div>

        {/* {menu en mobile} */}
        <div className="md:hidden ">
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
                href={"#sobre-mi"}
                className="flex items-center mt-10 p-2 rounded transition-all"
              >
                <IoAccessibility size={30} color="#F95738" />
                <span className="ml-3 text-xl text-grisclaro hover:text-naranja">
                  Sobre mi
                </span>
              </Link>
              <Link
                href={"#proyectos"}
                className="flex items-center mt-10 p-2 rounded transition-all"
              >
                <IoAlbums size={30} color="#F95738" />
                <span className="ml-3 text-xl text-grisclaro hover:text-naranja">
                  Proyectos
                </span>
              </Link>
              <Link
                href={"#skill"}
                className="flex items-center mt-10 p-2 rounded transition-all"
              >
                <IoGitBranch size={30} color="#F95738" />
                <span className="ml-3 text-xl text-grisclaro hover:text-naranja">
                  Habilidades
                </span>
              </Link>
              <Link
                href={"#contacto"}
                className="flex items-center mt-10 p-2 rounded transition-all"
              >
                <IoPerson size={30} color="#F95738" />
                <span className="ml-3 text-xl text-grisclaro hover:text-naranja">
                  Contacto
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
