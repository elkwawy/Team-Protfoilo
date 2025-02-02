import { AiFillLinkedin } from "react-icons/ai";
import { FaSquareFacebook, FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const ourContacts = [
    {
      link: "mailto:dotcode16@gmail.com",
      icon: <MdEmail className="text-color-black text-[63px]" />,
    },
    {
      link: "https://www.linkedin.com/in/dot-code-b2b267328/",
      icon: <AiFillLinkedin className="text-color-black  text-[58px]" />,
    },
    {
      link: "https://www.facebook.com/",
      icon: <FaSquareFacebook className="text-color-black text-[58px]" />,
    },
    {
      link: "https://github.com/Dot-Code-16",
      icon: <FaSquareGithub className="text-color-black text-6xl" />,
    },
  ];