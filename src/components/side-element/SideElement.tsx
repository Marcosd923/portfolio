import Link from "next/link";
import React from "react";
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";

export const SideElement = () => {
  return (
    <nav className="fixed hidden md:flex flex-col sm:ml-4 lg:ml-12 my-64 ">
      <ul>
        <li className="my-7">
          <Link href={"#"}>
            <IoLogoGithub
              color="rgb(100 116 139)"
              className="w-6 h-6 hover:-translate-y-1 duration-200"
            />
          </Link>
        </li>
        <li className="my-7">
          <Link href={"#"}>
            <IoLogoInstagram
              color="rgb(100 116 139)"
              className="w-6 h-6 hover:-translate-y-1  duration-200"
            />
          </Link>
        </li>
        <li className="my-7">
          <Link href={""}>
            <IoLogoWhatsapp
              color="rgb(100 116 139)"
              className="w-6 h-6 hover:-translate-y-1 duration-200 "
            />
          </Link>
        </li>
        <li className="my-7">
          <Link href={""}>
            <IoLogoLinkedin
              color="rgb(100 116 139)"
              className="w-6 h-6 hover:-translate-y-1 duration-200"
            />
          </Link>
        </li>
        <div className="w-0.5 bg-grismedio h-32 rounded-sm mt-4 mx-auto"></div>
      </ul>
    </nav>
  );
};
