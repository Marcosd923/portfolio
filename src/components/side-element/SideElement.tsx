import Link from "next/link";
import React from "react";

import {
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandGithub,
} from "@tabler/icons-react";

export const SideElement = () => {
  return (
    <section className="flex justify-between">
      <nav className="fixed hidden md:flex md:flex-col sm:ml-4 lg:ml-12 my-80 ">
        <ul>
          <li className="my-7">
            <Link href={"https://github.com/Marcosd923"} target="_blank">
              <IconBrandGithub
                color="#d1d5db"
                className="w-6 h-6 hover:-translate-y-1 duration-200 hover:stroke-naranja"
              />
            </Link>
          </li>
          <li className="my-7">
            <Link
              href={"https://www.instagram.com/marcosdaut/"}
              target="_blank"
            >
              <IconBrandInstagram
                color="#d1d5db"
                className="w-6 h-6 hover:-translate-y-1  duration-200 hover:stroke-naranja"
              />
            </Link>
          </li>
          <li className="my-7">
            <Link href={"https://wa.me/5492477336490"} target="_blank">
              <IconBrandWhatsapp
                color="#d1d5db"
                className="w-6 h-6 hover:-translate-y-1 duration-200  hover:stroke-naranja"
              />
            </Link>
          </li>
          <li className="mb-12">
            <Link
              href={"https://www.linkedin.com/in/marcosdaut/"}
              target="_blank"
            >
              <IconBrandLinkedin
                color="#d1d5db"
                className="w-6 h-6 hover:-translate-y-1 duration-200 hover:stroke-naranja"
              />
            </Link>
          </li>
          <div className=" w-0.5 bg-grisclaro h-32 rounded-sm mt-4 mx-auto"></div>
        </ul>
      </nav>
    </section>
  );
};
