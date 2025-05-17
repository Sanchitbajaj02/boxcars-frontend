import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface PopularCarProps {
  id: number;
  title: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  location: string;
  image: string;
}

const PopularCarCard = ({
  id,
  title,
  make,
  model,
  year,
  price,
  mileage,
  location,
  image,
}: PopularCarProps) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden relative group">
      {/* Background image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
      </div>

      {/* Content */}
      <div className="p-4 text-white relative">
        <div className="absolute top-0 right-0 transform -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
          Featured
        </div>

        <h3 className="text-lg font-medium mb-1">
          {make} {model}
        </h3>
        <div className="flex items-center text-xs text-gray-300 mb-3">
          <span>{year}</span>
          <span className="mx-2">•</span>
          <span>{mileage.toLocaleString()} mi</span>
          <span className="mx-2">•</span>
          <span>{location}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="font-bold text-lg">${price.toLocaleString()}</div>
          <Link
            href={`/vehicles/${id}`}
            className="text-xs text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-full transition-colors"
          >
            View Deal
          </Link>
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const tabs = [
    { id: "all", label: "All" },
    { id: "bmw", label: "BMW" },
    { id: "mercedes", label: "Mercedes-Benz" },
  ];

  const popularCars = [
    {
      id: 1,
      title: "Mercedes-Benz GLE Coupe",
      make: "Mercedes-Benz",
      model: "GLE Coupe",
      year: 2023,
      price: 74000,
      mileage: 12000,
      location: "New York, NY",
      image: "/assets/fair-price-for-your-car.jpg",
    },
    {
      id: 2,
      title: "BMW X7",
      make: "BMW",
      model: "X7",
      year: 2023,
      price: 85000,
      mileage: 8500,
      location: "Los Angeles, CA",
      image: "/assets/fair-price-for-your-car.jpg",
    },
    {
      id: 3,
      title: "Porsche Cayenne",
      make: "Porsche",
      model: "Cayenne",
      year: 2022,
      price: 79000,
      mileage: 15000,
      location: "Miami, FL",
      image: "/assets/fair-price-for-your-car.jpg",
    },
  ];

  return (
    <div className="py-20 px-8 lg:px-2 bg-white text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-2 justify-between items-center mb-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-black text-center lg:text-left mb-4 lg:mb-0">
            Latest Blog Posts
          </h2>
          <Link
            href="/brands"
            className="text-sm text-black/75 hover:text-black flex items-center gap-2"
          >
            View All <ArrowUpRight />
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                tab.id === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Car listings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularCars.map((car) => (
            <PopularCarCard key={car.id} {...car} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-1">
          <button className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
