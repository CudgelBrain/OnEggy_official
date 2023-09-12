import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const navbar = () => {
  const router = useRouter();
  const isLinkActive = (href) => {
    return router.pathname === href ? "font-bold" : "font-normal"; // Customize the active and inactive link styles
  };
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
      <ul className="flex justify-end py-4">
        <Link
          href="/about/about"
          className={`mx-5 cursor-pointer pt-2 ${isLinkActive("/about/about")}`}
        >
          About Us
        </Link>
        <Link
          href="/services/services"
          className={`mx-5 cursor-pointer pt-2 ${isLinkActive(
            "/services/services"
          )}`}
        >
          Service
        </Link>
        <Link
          href="/team/team"
          className={`mx-5 cursor-pointer pt-2 ${isLinkActive("/team/team")}`}
        >
          Team
        </Link>
        <Link
          href="/client/client"
          className={`mx-5 cursor-pointer pt-2 ${isLinkActive(
            "/client/client"
          )}`}
        >
          Portfolio
        </Link>
        <Link
          href="/blog/blog"
          className={`mx-5 cursor-pointer pt-2 ${isLinkActive("/blog/blog")}`}
        >
          Blog
        </Link>
        <Link
          href="/contact/contact"
          className={`text-black py-2 px-6 rounded-md border border-black  ${isLinkActive(
            "/contact/contact"
          )}`}
        >
          Request a Quote
        </Link>{" "}
      </ul>
    </nav>
  );
};

export default navbar;
