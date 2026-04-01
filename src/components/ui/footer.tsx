import Link from "next/link";
import Image from "next/image";
import Logo3 from "../../../public/logo3.svg";
import Logo2 from "../../../public/logo2.svg";

import { FaArrowRightLong } from "react-icons/fa6";

import { useTheme } from "next-themes";
import { StudioContact } from "./studio-contact";

export const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="m-auto w-full space-y-5 py-20" id="footer">
      <StudioContact />

      <div className="flex items-center gap-2">
        {theme === "light" ? (
          <Image className="w-40 lg:w-52" src={Logo3} alt="Logo" />
        ) : (
          <Image className="w-40 lg:w-52" src={Logo2} alt="Logo" />
        )}
      </div>
    </footer>
  );
};
