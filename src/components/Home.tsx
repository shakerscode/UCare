/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Card } from "./home/Card";
import { HeroSection } from "./home/Hero";
import SearchBox from "./home/SearchBox";
import { IHomeProps } from "../interfaces";

function Home() {
  const [location, setLocation] = useState<IHomeProps>({
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState<string | null>(null);

  console.log(error);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="">
      <div className="h-[500px] md:h-[600px] px-4 md:px-8 bg-gradient-to-r from-teal-100 via-teal-50 to-teal-100 rounded-ee-3xl rounded-es-3xl">
        <HeroSection />
      </div>
      <div className="min-h-[500px] my-20 px-4 md:px-8">
        <section className="h-full w-full mt-10">
          <SearchBox location={location} />
        </section>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {arr.map((d) => (
            <Card key={d} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
