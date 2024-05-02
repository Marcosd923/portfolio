import Link from "next/link";
import React from "react";

export const SideElementRigth = () => {
  return (
    <div className="fixed hidden md:flex flex-col sm:ml-4 lg:ml-12 my-64">
      <Link href={"#"}>marcos.daut@gmail.com</Link>
      <div className="w-0.5 bg-grismedio h-32 rounded-sm mt-4 mx-auto"></div>
    </div>
  );
};
