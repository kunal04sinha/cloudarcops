import React from "react";
import link from "../assets/images/linkedin.svg";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram2.svg";
import spotify from "../assets/images/spotify.svg";
import youtube from "../assets/images/youtube.svg";
import devops from "../assets/images/devops.svg";
import clutch from "../assets/images/clutch.png";
import { Link } from "react-router-dom";
import { paths } from "../const/path";
const Footer = ({ handleLinkClick }) => {
  return (
    <footer id="contact-footer" className="bg-[#ECECEC] text-black py-10">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-500">
              CloudArcOps
            </h2>
            <p className="text-sm mb-4 pl-3 tracking-wider text-blue-500">
              BUILT ON TRUST
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#">
                <img src={link} alt="LinkedIn" className="w-10 h-10" />
              </a>
              <a href="#">
                <img src={facebook} alt="Facebook" className="w-10 h-10" />
              </a>
              <a href="#">
                <img src={instagram} alt="Instagram" className="w-10 h-10" />
              </a>
              <a href="#">
                <img src={youtube} alt="YouTube" className="w-10 h-10" />
              </a>
              <a href="#">
                <img src={spotify} alt="Spotify" className="w-10 h-10" />
              </a>
            </div>
            <div className="flex space-x-4">
              <img src={devops} alt="GoodFirms Badge" className="w-20 h-20" />
              <img src={clutch} alt="ISO Badge" className="w-20 h-20" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-500">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to={paths.home}
                  onClick={() => handleLinkClick(paths.home)}
                  className="text-black hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services/devops"
                  className="text-black hover:underline"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to={paths.aboutus}
                  onClick={() => handleLinkClick(paths.aboutus)}
                  className="text-black hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={paths.resources}
                  onClick={() => handleLinkClick(paths.resources)}
                  className="text-black hover:underline"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-500">
              OUR OFFICES
            </h3>
            <ul className="space-y-2">
              <li>
                <p className="text-black flex ">
                  <span className="mr-2">📍</span> 328, Laxmi Enclave 1, near
                  Gajera Road, Aamba Talavadi, Chitrakut Society, Katargam,
                  Surat, Gujarat 395004
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-500">
              CONTACT NUMBER
            </h3>
            <ul className="space-y-2">
              <li className="text-black">
                <p>+91 8153804742</p>
                <p>+91 7575856885</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center text-black">
          <p className="mb-2">Privacy Policy</p>
          <p>
            © 2024 <span className="text-blue-500">CloudArcOps LTD</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
