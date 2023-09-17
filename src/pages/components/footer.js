import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../../public/logo.png';
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const footer = () => {
  return (
    <div>
      <div className=" bg-l_black rounded-tl-3xl rounded-tr-3xl mt-16">
        <nav className="py-10 flex justify-between">
          <Image
            src={logo}
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
          <div className="flex space-x-6 mr-20 self-center">
            <div className="bg-white p-1 pr-2 pl-2 rounded-full text-l_black">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div className="bg-white p-1 pr-2 pl-2 rounded-full text-l_black">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="bg-white p-1 pr-2 pl-2 rounded-full text-l_black">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </div>
        </nav>
        <div className="flex ml-10 mr-10 mt-5">
          <div className="w-1/2">
            <h2 className="bg-l_blue rounded-md p-1 w-28 font-semibold">
              Contact us:
            </h2>
            <p className="text-white mt-4">
              Email: <span className="underline">ask@oneggy.com</span>
            </p>
            <p className="text-white mt-4">
              Phone: <span className="underline">+91 9811133005</span>
            </p>
            <p className="text-white mt-4 w-1/2">
              Address: 172, Block M, Shakurpur New Delhi, Delhi 110034
            </p>
          </div>
          <div className="bg-greyblack flex p-6 space-x-4 rounded-2xl mb-12 w-1/2">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              // value={formData.email}
              // onChange={handleChange}
              className="w-full px-3 h-14 py-3 my-10 border placeholder-white bg-greyblack rounded-lg focus:outline-none focus:ring focus:border-blue-300 border-white"
              required
            />
            <button className="bg-l_blue text-black hover:bg-l_black border hover:border-l_blue hover:text-white px-3 h-14 py-3 mt-10 mb-10  rounded-xl w-full items-center">
              Subscribe to blogs
            </button>
          </div>
        </div>
          <hr className="mx-auto w-[94%]"/>
        <footer className="text-white m-10 flex  space-x-8 pb-10">
          <p>&copy; {new Date().getFullYear()} OnEggy. All Rights Reserved.</p>
          <a href="#" className="underline">
            Privacy Policy
          </a>
        </footer>
      </div>
    </div>
  );
};

export default footer;
