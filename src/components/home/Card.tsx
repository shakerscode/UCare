/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import {
  FaClock,
  FaDirections,
  FaMapMarkerAlt,
  FaPhone,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import CustomModal from "../shared/CustomModal";

interface Tags {
  "addr:city"?: string;
  "addr:housenumber"?: string;
  "addr:postcode"?: string;
  "addr:street"?: string;
  amenity?: string;
  check_date?: string;
  emergency?: string;
  "gnis:feature_id"?: string;
  healthcare?: string;
  name?: string;
  opening_hours?: string;
  operator?: string;
  "operator:wikidata"?: string;
  "operator:wikipedia"?: string;
  phone?: string;
  website?: string;
}

// interface WikimediaResponse {
//   query: {
//     pages: {
//       [key: string]: {
//         original?: {
//           source: string;
//         };
//         thumbnail?: {
//           source: string;
//         };
//       };
//     };
//   };
// }

interface ISelectedMonth {
  id: number;
  waitTime: number;
}
export const Card = ({ data, id }: { data: Tags; id: number }) => {
  const [selectedTimes, setSelectedTimes] = useState<ISelectedMonth[]>(
    JSON.parse(localStorage.getItem("item") || "[]")
  );
  const [sTime, setTime] = useState<number | null>(30);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // const fetchWikimediaImage = async (
  //   placeName: string
  // ): Promise<string | null> => {
  //   const url = `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=pageimages&piprop=original|thumbnail&titles=${encodeURIComponent(
  //     placeName
  //   )}`;

  //   try {
  //     const response = await fetch(url);
  //     const data: WikimediaResponse = await response.json();
  //     const page = Object.values(data.query.pages)[0];
  //     return page?.original?.source || page?.thumbnail?.source || null; // Try original, fallback to thumbnail
  //   } catch (error) {
  //     console.error("Error fetching image from Wikimedia:", error);
  //     return null;
  //   }
  // };

  // Test with a well-known location

  // const getImage = async () => {
  //   const url = await fetchWikimediaImage(data?.name as string).then(
  //     (image) => image
  //   );
  //   return url;
  // };

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleSubmit = (time: number, id: number) => {
    if (id && time) {
      // Check if an item with the same `id` already exists
      const alreadyExists = selectedTimes?.some((t) => t?.id === id);
      if (alreadyExists) {
        console.log("already exists");
        return;
      } else {
        // Update the state by adding the new item to the array
        setSelectedTimes((prev) => [...prev, { id, waitTime: time }]);
        setIsOpen(false);
        setTime(null);
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(selectedTimes));
  }, [selectedTimes]);

  console.log(data?.emergency)

  return (
    <div className="w-auto bg-white border border-gray-200 rounded-3xl ">
      <div className="overflow-hidden bg-cover bg-no-repeat rounded-t-3xl">
        <img
          className="rounded-t-3xl hover:brightness-75 transition-all ease-in-out duration-500 hover:scale-110 "
          src={
            "https://img.freepik.com/free-photo/clinical-reception-with-waiting-room-facility-lobby-registration-counter-used-patients-with-medical-appointments-empty-reception-desk-health-center-checkup-visits_482257-51247.jpg"
          }
          alt=""
        />
      </div>
      <div className="">
        {/* Card Content */}
        <div className="p-6">
          {/* Title */}
          <h2 className="text-2xl font-semibold text-teal-500">{data?.name}</h2>

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
              {data?.["addr:housenumber"]}, {data?.["addr:street"]},{" "}
              {data?.["addr:city"]}, {data?.["addr:postcode"]}
            </p>
          </div>

          {/* Hours */}
          <div className="flex items-center mt-2">
            <FaClock className="text-teal-500 mr-2" />
            <p className="text-gray-600 text-sm">
              Open {data?.opening_hours ? data?.opening_hours : "24"} Hours
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center mt-2">
            <FaPhone className="text-teal-500 mr-2" />
            <a
              href={` ${data?.phone}`}
              className="text-teal-600 hover:underline text-sm"
            >
              {data?.phone || "Not available"}
            </a>
          </div>

          {/* Wait Time (Hardcoded) */}
          <div className="flex items-center mt-2">
            <FaClock className="text-teal-500 mr-2" />
            <p className="text-gray-600 text-sm">
              Wait Time:{" "}
              {selectedTimes.length > 0
                ? selectedTimes.find((t) => t.id === id)?.waitTime ?? sTime
                : sTime}{" "}
              min
            </p>
          </div>

          {/* Get Directions Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleClick}
              className="mt-4 w-full flex items-center justify-center gap-1.5 bg-teal-500 text-white py-2 rounded-lg shadow-md hover:bg-teal-600 transition-all duration-300 font-semibold"
            >
              Live wait
            </button>
            <button className="mt-4 w-full flex items-center justify-center gap-1.5 bg-teal-500 text-white py-2 rounded-lg shadow-md hover:bg-teal-600 transition-all duration-300 font-semibold">
              Get Directions <FaDirections className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      {/* Open Modal  */}
      <CustomModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        header={<div></div>}
        modalContent={
          <div className="max-w-[400px] w-full h-fit px-10">
            <h2 className="text-center text-xl font-bold text-teal-500">
              What is a wait time?
            </h2>
            <p className="text-center text-teal-400 mb-5">(in minutes)</p>
            <div className="grid grid-cols-4 gap-4">
              {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120].map((d) => (
                <div
                  key={d}
                  onClick={() => setTime(d)}
                  className={`${
                    sTime === d
                      ? "bg-teal-500 text-white"
                      : "bg-white text-teal-500"
                  } border border-teal-400 text-teal-500 p-3 rounded-lg text-center hover:bg-teal-500 hover:text-white transition-all duration-300 cursor-pointer`}
                >
                  {d}
                </div>
              ))}
            </div>
          </div>
        }
        footer={
          <div className="flex items-center gap-3 mt-5 justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="px-6 font-semibold py-2 border border-teal-300 rounded-xl shadow text-teal-500"
            >
              Close
            </button>
            <button
              onClick={() => handleSubmit(sTime as number, id)}
              className="px-6 font-semibold py-2 border border-teal-300 rounded-xl shadow text-white bg-teal-500"
            >
              Submit
            </button>
          </div>
        }
      />
    </div>
  );
};
