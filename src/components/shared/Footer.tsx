import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center py-12 bg-gradient-to-r from-teal-50 via-teal-200 to-teal-50 text-center">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Doctor Image */}
        <div className="md:flex justify-center lg:justify-end hidden">
          <img
            src="https://img.freepik.com/free-photo/female-doctor-hospital_23-2148827760.jpg" // Replace with actual path
            alt="Doctor"
            className="w-[440px] rounded-3xl h-auto"
          />
        </div>

        {/* Text and Social Media Links */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-6xl font-bold text-gray-800">
            Healthy Living <br />
            <span className="text-teal-600">Starts Here</span>
          </h2>
          <p className="text-gray-600">Follow us on social media</p>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-white text-teal-600 p-3 rounded-full shadow-lg"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-white text-teal-600 p-3 rounded-full shadow-lg"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-white text-teal-600 p-3 rounded-full shadow-lg"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Text */}
      <div className="mt-8 text-gray-500 text-sm">
        &copy;2024 UCare. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
