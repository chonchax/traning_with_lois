import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/asset/img/navbar/logo-320x250.webp";
import { navigationLinks } from "@/mock/navigationLinks";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className="bg-primary-800 font-bold w-full h-20 py-2 px-40 flex flex-row justify-between items-center shadow-md">
      <Link href="/">
        <div className="transform transition duration-300 ease-in-out hover:scale-110 rounded-2xl shadow-md overflow-hidden">
          <Image src={logo} alt="Logo" width={90} height={90} />
        </div>
      </Link>
      <ul className="flex flex-row gap-x-12">
        {navigationLinks.map((link) => (
          <li className="text-primary-200 hover:text-primary-50 transform transition duration-300 ease-in-out hover:scale-110" key={link.id}>
            <NavLink href={link.href}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
