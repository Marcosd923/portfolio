import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="text-grismedio text-center md:mt-32 py-10">
      <div className="md:hidden mt-4 flex justify-center">
        <ul className="flex">
          <li className="my-7 mr-2">
            <Link href={"https://github.com/Marcosd923"} target="_blank">
              <IconBrandGithub
                color="#d1d5db"
                className="w-6 h-6 hover:-translate-y-1 duration-200 hover:stroke-naranja"
              />
            </Link>
          </li>
          <li className="my-7 mx-2">
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
          <li className="my-7 mx-2">
            <Link href={"https://wa.me/5492477336490"} target="_blank">
              <IconBrandWhatsapp
                color="#d1d5db"
                className="w-6 h-6 hover:-translate-y-1 duration-200  hover:stroke-naranja"
              />
            </Link>
          </li>
          <li className="my-7 ml-2">
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
        </ul>
      </div>
      <span>Echo con 🧡 por Marcos</span>
      <br />
      <span>&#169; 2024</span>
    </div>
  );
};
