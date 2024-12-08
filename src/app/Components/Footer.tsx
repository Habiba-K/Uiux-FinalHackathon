import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className=" text-gray-700  px-5 ">
      <div className="grid grid-cols-2  mx-auto bg-gray-300 rounded  py-10">
        <div className=" px-10 ">
          <h2 className=" text-2xl font-bold text-gray-800">Bandage</h2>
        </div>
        <div className="flex space-x-4 mt-4 justify-end pr-20">
          <div className="flex gap-2 ">
            <FaFacebook className="text-blue-500 w-4 h-4 " />
            <TiSocialYoutube className="text-blue-500 w-4 h-4 " />
            <FaInstagram className="text-blue-500 w-4 h-4 " />
            <FaTwitter className="w-4 h-4  text-blue-500" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10 w-[75%]   md:w-[95%] lg:max-w-[1440px] ">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-start space-y-6 md:space-y-0">
          {/* Logo and Social Icons */}

          {/* Links Section */}
          <div className="flex flex-wrap space-x-16">
            {/* Column 1 */}
            <div>
              <h3 className="font-semibold text-gray-800">Company Info</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 text-gray-500 font-semibold"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 text-gray-500 font-semibold"
                  >
                    Carrier
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 text-gray-500 font-semibold"
                  >
                    We are hiring
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 text-gray-500 font-semibold"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div>
              <h3 className="font-semibold text-gray-800">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 text-gray-500 font-semibold"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 text-gray-500 font-semibold"
                  >
                    Carrier
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 text-gray-500 font-semibold"
                  >
                    We are hiring
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 text-gray-500 font-semibold"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div>
              <h3 className="font-semibold text-gray-800">Features</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 text-gray-500 font-semibold"
                  >
                    Business Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 text-gray-500 font-semibold"
                  >
                    User Analytics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 text-gray-500 font-semibold"
                  >
                    Live Chat
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 text-gray-500 font-semibold"
                  >
                    Unlimited Support
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 4 */}
            <div>
              <h3 className="font-semibold text-gray-800">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 text-gray-500 font-semibold"
                  >
                    iOS & Android
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 text-gray-500 font-semibold"
                  >
                    Watch a Demo
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 text-gray-500 font-semibold"
                  >
                    Customers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 text-gray-500 font-semibold"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="font-semibold text-gray-800">Get In Touch</h3>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-2 w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-300"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-r-md hover:bg-blue-600"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-500 font-bold">
                Lore imp sum dolor Amit.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className=" font-semibold mt-10 border-t pt-4 text-center text-sm text-gray-500">
          Made With Love By Finland All Right Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
