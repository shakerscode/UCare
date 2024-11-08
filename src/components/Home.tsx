/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Card } from "./home/Card";
import { HeroSection } from "./home/Hero";
import SearchBox from "./home/SearchBox";
import { IHomeProps } from "../interfaces";
import { CardSkeleton } from "./shared/CardSkeleton";

interface Hospital {
  id: number;
  lat: number;
  lon: number;
  tags: {
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
  };
}

function Home() {
  const [location, setLocation] = useState<IHomeProps>({
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState<string | null>(null);
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

  console.log(error)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          fetchNearbyHospitals(40.6782, 73.9442);
        },
        (error) => {
          setError(error.message);
          setLoading(false); // Stop loading if there’s an error
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  }, []);

  // const url = `https://overpass-api.de/api/interpreter?data=[out:json];node(around:${radius},${latitude},${longitude})[amenity=hospital];out;`;
  const fetchNearbyHospitals = async (latitude: number, longitude: number) => {
    const radius = 5000;
    const url = `https://overpass-api.de/api/interpreter?data=[out:json];node(around:${radius},${latitude},${longitude})[amenity=clinic][healthcare=clinic];out;`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setHospitals(data.elements);
    } catch (error) {
      console.error("Error fetching hospital data:", error);
      setError("Failed to fetch hospital data.");
    } finally {
      setLoading(false); // Stop loading when the data fetch is complete
    }
  };

  console.log(hospitals)

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
          {loading
            ? Array.from({ length: 6 }, (_, index) => (
                <CardSkeleton key={index} />
              ))
            : hospitals?.map((d) => (
                <Card key={d?.id} data={d.tags} id={d?.id} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
