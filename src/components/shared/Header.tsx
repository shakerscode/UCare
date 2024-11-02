import { Link } from "react-router-dom";
import { BiSolidPhoneCall } from "react-icons/bi";

function Header() {
  return (
    <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-gradient-to-r from-teal-100 via-teal-50 to-teal-100">
      {/* Logo Section */}
      <Link to={"/"}>
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">U</span>
          </div>
          <span className="text-3xl font-semibold text-teal-600">UCare</span>
        </div>
      </Link>

      {/* Menu Links */}
      <div className="hidden md:flex items-center space-x-6 text-gray-800 font-medium">
        <div className="flex items-center space-x-1 cursor-pointer">
          <span className="cursor-pointer">Pages</span>
        </div>
        <span className="cursor-pointer">About Medical Clinic</span>
        <span className="cursor-pointer">Our Doctors</span>
        <span className="cursor-pointer">Treatments</span>
        <span className="cursor-pointer">Contact Us</span>
        <div className="flex items-center space-x-1 cursor-pointer">
          <span className="cursor-pointer">Our News</span>
        </div>
      </div>

      {/* Emergency Call Button */}
      <button className="bg-teal-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-teal-700 transition duration-200 flex items-center gap-1">
        <span className={"hidden md:flex"}>Emergency Call</span> <BiSolidPhoneCall className="text-lg"/>
      </button>
    </nav>
  );
}

export default Header;
