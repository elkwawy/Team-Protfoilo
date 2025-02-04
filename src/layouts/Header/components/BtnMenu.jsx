import { IoMenu } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";

const BtnMenu = ({ isMenuOpen, setIsMenuOpen, setIsServices }) => {
  return (
    <div className="min-[900px]:hidden relative">
      <MdOutlineCancel
        className={` absolute text-4xl cursor-pointer text-red-500 transition-transform duration-500 ease-in-out 
            ${
              isMenuOpen
                ? "opacity-100 rotate-180"
                : "opacity-0 rotate-0 pointer-events-none"
            }`}
        onClick={() => {
          setIsMenuOpen(false);
          setIsServices(false);
        }}
      />
      <IoMenu
        className={`text-4xl cursor-pointer text-[#51a8ff] transition-transform duration-500 ease-in-out 
            ${
              !isMenuOpen
                ? "opacity-100 rotate-180"
                : "opacity-0 rotate-0 pointer-events-none"
            }`}
        onClick={() => {
          setIsMenuOpen(true);
          setIsServices(false);
        }}
      />
    </div>
  );
};

export default BtnMenu;
