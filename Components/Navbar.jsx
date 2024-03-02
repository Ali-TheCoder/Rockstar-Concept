import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between absolute z-[1] top-[2%] px-12">
      <div className="w-[70%] flex items-center justify-between">
        <Image
          src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c46845952588bf44125a37117d4da32c.svg"
          width={30}
          height={30}
          className="cursor-pointer"
        />
        <ul className="flex gap-x-8">
          <li className="cursor-pointer flex items-center gap-x-1">
            Games <FiChevronDown className="mt-1.5" />{" "}
          </li>
          <li className="cursor-pointer">Newswire</li>
          <li className="cursor-pointer">Videos</li>
          <li className="cursor-pointer">Downloads</li>
          <li className="cursor-pointer flex items-center gap-x-1">
            Store <FiExternalLink className="mt-0.5" />
          </li>
          <li className="cursor-pointer flex items-center gap-x-1">
            Support <FiExternalLink className="mt-0.5" />
          </li>
        </ul>
      </div>
      <div className="w-[30%] flex items-center gap-x-7 justify-end">
        <button className="bg-[#fcaf17] text-[#060606] rounded-[4px] px-4 py-2 text-sm font-semibold">
          Get Launcher
        </button>
        <FiSearch className="cursor-pointer w-5 h-5" />
        <FiUser className="cursor-pointer w-5 h-5" />
      </div>
    </nav>
  );
};

export default Navbar;
