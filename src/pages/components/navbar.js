import React from "react";
import Image from "next/image";
import Link from "next/link";

const navbar = () => {
  return (
    <nav className="py-4 flex justify-between mx-auto max-w-7xl">
      <a href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          width="165"
          height="55"
          className="logo_img cursor-pointer"
        />
      </a>
      <ul className="flex justify-end py-4 align-center">
        <a href="../about/about">
          <li className="mx-5 cursor-pointer pt-2">About Us</li>
        </a>
        <li className="mx-5 cursor-pointer pt-2">Service</li>
        <li className="mx-5 cursor-pointer pt-2">Team</li>
        <li className="mx-5 cursor-pointer pt-2">Portfolio</li>
        <li className="mx-5 cursor-pointer pt-2">Blog</li>
        <Link href="/contact/section1" className="text-black py-2 px-6 rounded-md border border-black">
            Request a Quote
        </Link>{" "}
      </ul>
    </nav>
  );
};

export default navbar;