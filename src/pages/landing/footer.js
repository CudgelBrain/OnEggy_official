import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const footer = () => {
  return (
    <div>
      <div>
        <nav className="py-4 flex justify-between mx-auto max-w-7xl bg-l_black mt-16 rounded-3xl">
          <Image
            src="/logo.png"
            alt="Logo"
            width="165"
            height="55"
            className="logo_img ml-10"
          />
          <ul className="flex justify-center py-4 text-white underline">
            <li className="mx-5 cursor-pointer pt-2">About us</li>
            <li className="mx-5 cursor-pointer pt-2">Service</li>
            <li className="mx-5 cursor-pointer pt-2">Team</li>
            <li className="mx-5 cursor-pointer pt-2">Portfolio</li>
            <li className="mx-5 cursor-pointer pt-2">Blog</li>
          </ul>
          <div className="flex">
            <div className="bg-white p-1 rounded-full text-l_black">
              <FontAwesomeIcon icon={faFacebookF} size="4x" />
            </div>
            <div className="bg-white p-1 rounded-full text-l_black">
              <FontAwesomeIcon icon={faTwitter} size="4x" />
            </div>
            <div className="bg-white p-1 rounded-full text-l_black">
              <FontAwesomeIcon icon={faLinkedin} size="4x" />
            </div>
          </div>
        </nav>
        <div className="w-1/2">
          <h2 className="bg-l_blue rounded-3xl p-1">Contact us:</h2>
          <p>Email: ask@oneggy.com</p>
          <p>Phone: +91 9811133005</p>
          <p>Address: 172, Block M, Shakurpur New Delhi, Delhi 110034</p>
        </div>
        <div className="bg-greyblack">
          <input
            type="email"
            id="email"
            name="email"
            value={""}
            // onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 border-white"
            required
          />
          <button className="bg-l_blue text-black hover:bg-l_black border hover:border-l_blue hover:text-white px-6 py-4 mt-8 rounded-xl w-full">
            Subscribe to blogs
          </button>
        </div>
      </div>
      <hr />
      <footer className="text-white">
        <p>
          &copy; {new Date().getFullYear()} OnEggy. All Rights Reserved.
        </p>
        <a href="#" className="underline">Privacy Policy</a>
      </footer>
    </div>
  );
};

export default footer;
