import { ImSphere } from "react-icons/im";
import { FaChevronDown } from "react-icons/fa6";
import { FaTwitch } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full h-[12%] bg-[#1a1a1a] bg-opacity-75 px-20 flex flex-col items-center justify-between">
      <div className="w-full h-[55%] flex items-center justify-between">
        <div className="flex items-center justify-center gap-x-20">
          <ul className="flex flex-col text-white gap-y-1">
            <li className="mb-2 font-semibold cursor-pointer">Branches</li>
            <li className="cursor-pointer">New York </li>
            <li className="cursor-pointer">London</li>
            <li className="cursor-pointer">Paris </li>
            <li className="cursor-pointer">Bogota </li>
          </ul>
          <ul className="flex flex-col text-white gap-y-1">
            <li className="mb-2 font-semibold cursor-pointer">Company</li>
            <li className="cursor-pointer">Corporate</li>
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">Privacy</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
          <ul className="flex flex-col text-white gap-y-1">
            <li className="mb-2 font-semibold cursor-pointer">Resources</li>
            <li className="cursor-pointer">Cookie setting</li>
            <li className="cursor-pointer">Cookie policy</li>
            <li className="cursor-pointer">Legal</li>
            <li className="cursor-pointer">
              Do not sell my personal information
            </li>
          </ul>
        </div>
        <div className="h-full flex flex-col items-start justify-between py-10 text-white w-1/4">
          <div className="flex items-center justify-center gap-x-2 cursor-pointer">
            <ImSphere />
            Select a language
            <FaChevronDown className="mt-1.5 w-3 h-3" />
          </div>
          <div className="w-full flex flex-col items-start gap-y-3">
            <label htmlFor="email" className="cursor-pointer">
              Subscribe to our Newswire
            </label>
            <div className="w-full h-[60%] flex items-center">
              <input
                id="email"
                className="w-[80%] h-full bg-transparent border border-r-0 border-white py-2 px-3 text-white placeholder:text-white placeholder:opacity-50 text-sm outline-none rounded-s-md"
                placeholder="Enter your Email"
              />
              <button className="w-1/5 h-full bg-[#FCAF17] text-xs font-semibold rounded-e-md text-[#191919]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[35%]">
        <div className="w-full flex items-center justify-between border-b-2 border-white pb-3 mb-3">
          <h2 className="text-white font-semibold text-lg">Rockstar Games</h2>
          <div className="flex items-center justify-center gap-x-5 text-white">
            <FaTwitch className="w-5 h-5 cursor-pointer" />
            <FaInstagram className="w-5 h-5 cursor-pointer" />
            <FaXTwitter className="w-5 h-5 cursor-pointer" />
            <FaYoutube className="w-5 h-5 cursor-pointer" />
            <FaFacebook className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center gap-x-10">
          <div className="flex flex-col items-start justify-center text-white gap-y-3">
            <h3 className="font-semibold text-sm">Developed by</h3>
            <Link href="https://github.com/Ali-TheCoder" className="flex items-center gap-x-3 cursor-pointer">
              <FaGithub className="w-5 h-5" />
              <span className="text-sm">Ali-TheCoder</span>
            </Link>
          </div>
          <div className="flex flex-col items-start justify-center text-white gap-y-3">
            <h3 className="font-semibold text-sm">Designed by</h3>
            <div className="flex items-center justify-center gap-x-8">
              <Link
                href="https://www.instagram.com/aryanuiux?igsh=MWE2ZGJkcHlrYXBnMA=="
                className="flex items-center gap-x-3 cursor-pointer"
              >
                <FaInstagram className="w-5 h-5" />
                <span className="text-sm">aryanuiux</span>
              </Link>
              <Link
                href="https://www.instagram.com/uiux.elle?igsh=bWt3MTRlYnE1cHh5"
                className="flex items-center gap-x-3 cursor-pointer"
              >
                <FaInstagram className="w-5 h-5" />
                <span className="text-sm">uiux.elle</span>
              </Link>
              <Link
                href="https://www.instagram.com/shivehpedia?igsh=MTZvN3psZHVoNTkyYg=="
                className="flex items-center gap-x-3 cursor-pointer"
              >
                <FaInstagram className="w-5 h-5" />
                <span className="text-sm">shivehpedia</span>
              </Link>
              <Link
                href="https://www.instagram.com/masizokaei_uiux.designer?igsh=Y3BvYWpxczI2aWdp"
                className="flex items-center gap-x-3 cursor-pointer"
              >
                <FaInstagram className="w-5 h-5" />
                <span className="text-sm">masizokaei_uiux.designer</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
