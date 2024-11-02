import {
    FaClock,
    FaDirections,
    FaMapMarkerAlt,
    FaPhone,
    FaStar,
    FaStarHalfAlt,
  } from "react-icons/fa";
  
  export const Card = () => {
    return (
      <div className="w-auto bg-white border border-gray-200 rounded-3xl ">
        <div className="overflow-hidden bg-cover bg-no-repeat rounded-t-3xl">
          <img
            className="rounded-t-3xl hover:brightness-75 transition-all ease-in-out duration-500 hover:scale-110 "
            src="https://img.freepik.com/free-photo/clinical-reception-with-waiting-room-facility-lobby-registration-counter-used-patients-with-medical-appointments-empty-reception-desk-health-center-checkup-visits_482257-51247.jpg"
            alt=""
          />
        </div>
        <div className="">
          {/* Card Content */}
          <div className="p-6">
            {/* Title */}
            <h2 className="text-2xl font-semibold text-teal-500">Mount Sinai</h2>
  
            {/* Rating and Reviews */}
            <div className="flex items-center mt-2">
              <p className="text-gray-700 font-semibold">2.4</p>
              <div className="flex ml-2">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStarHalfAlt className="text-yellow-400" />
                <FaStar className="text-gray-300" />
                <FaStar className="text-gray-300" />
              </div>
              <p className="text-gray-600 ml-2">(373)</p>
            </div>
  
            {/* Address */}
            <div className="flex items-center mt-4 ">
              <FaMapMarkerAlt className="text-teal-500 mr-2" />
              <p className="text-gray-600 text-sm">
                3201 Kings Hwy, Brooklyn, NY 11234
              </p>
            </div>
  
            {/* Hours */}
            <div className="flex items-center mt-2">
              <FaClock className="text-teal-500 mr-2" />
              <p className="text-gray-600 text-sm">Open 24 hours</p>
            </div>
  
            {/* Phone */}
            <div className="flex items-center mt-2">
              <FaPhone className="text-teal-500 mr-2" />
              <a
                href="tel:+17182523000"
                className="text-teal-600 hover:underline text-sm"
              >
                (718) 252-3000
              </a>
            </div>
  
            {/* Wait Time (Hardcoded) */}
            <div className="flex items-center mt-2">
              <FaClock className="text-teal-500 mr-2" />
              <p className="text-gray-600 text-sm">Wait Time: 30 min</p>
            </div>
  
            {/* Get Directions Button */}
            <button className="mt-4 w-full flex items-center justify-center gap-1.5 bg-teal-500 text-white py-2 rounded-lg shadow-md hover:bg-teal-600 transition-all duration-300 font-semibold">
              Get Directions <FaDirections className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    );
  };
  