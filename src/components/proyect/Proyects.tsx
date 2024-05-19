import Image from "next/image";
import Link from "next/link";

export const Proyects = () => {
  return (
    <section
      id="proyectos"
      className="flex w-full flex-col gap-8 pb-[10rem]  items-center justify-center px-2 sm:px-0 "
    >
      <h1 className="font-bold mt-32 text-grisclaro text-3xl  mb-10 flex justify-center  before:content-['02.'] before:text-naranja divide-y-0">
        Proyectos
      </h1>
      <article className="m-auto mt-2  grid gap-8 md:gap-10 xl:grid-cols-2 2xl:grid-cols-2 max-w-md sm:max-w-lg lg:max-w-3xl xl:max-w-6xl 2xl:max-w-7xl ">
        <div className=" block group w-full max-w-[28rem]  hover:shadow-negro shadow-md rounded-md overflow-hidden transition-all duration-200 grayscale  hover:grayscale-0 group">
          <div className="overflow-hidden h-[230px] ">
            <Link href="https://fullsix.onrender.com/">
              <Image
                className="object-cover group-hover:scale-[1.05] transition duration-300"
                src={"/imgs/fullsix.png"}
                alt={""}
                height={1000}
                width={1000}
              />
            </Link>
          </div>
          <div className="p-4 py-3 flex flex-col gap-1 justify-center ">
            <div></div>
            <div className="flex justify-between capitalize font-medium text-xl text-naranja font-sans mt-3">
              <span>Full six</span>
              <span className="mr-1">2023</span>
            </div>
            <p className="font-sans text-grisclaro">
              Pagina web para curso de Programacion Web Full Stack, realizada
              con Node Js, Javascript, Html, CSS, Express y MySQL. Venta de
              servicios de apoyo Psicologicos para el ambito deportivo
            </p>
          </div>
        </div>
        <div className="block group w-full max-w-[28rem]  hover:shadow-negro shadow-md rounded-md overflow-hidden transition-all duration-200 grayscale  hover:grayscale-0 group">
          <div className="overflow-hidden h-[220px]">
            <Link href="https://fullsix.onrender.com/">
              <Image
                className="object-cover group-hover:scale-[1.05] transition duration-300"
                src={"/imgs/fullsix.png"}
                alt={""}
                height={1000}
                width={1000}
              />
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};
