"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllVehicles } from "@/services/vehicle.service";
import { useQuery } from "@tanstack/react-query";

interface PopularCarProps {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  location: string;
  images: string[];
}

const PopularCarCard = ({
  id,
  make,
  model,
  year,
  price,
  mileage,
  location,
  images,
}: PopularCarProps) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden relative group">
      {/* Background image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={images[0] || "/assets/fair-price-for-your-car.jpg"}
          alt={`${make} ${model}`}
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

const ExploreAllVehicles = () => {
  const [selectedMake, setSelectedMake] = useState<string | undefined>();

  const {
    data: vehicles,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["vehicles", selectedMake],
    queryFn: () =>
      getAllVehicles(selectedMake ? { make: selectedMake } : undefined),
  });

  const tabs = [
    { id: "all", label: "All" },
    { id: "bmw", label: "BMW" },
    { id: "mercedes", label: "Mercedes-Benz" },
  ];

  return (
    <div className="py-20 px-8 lg:px-2 bg-white text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-2 justify-between items-center mb-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-black text-center lg:text-left mb-4 lg:mb-0">
            Explore All Vehicles
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
              onClick={() =>
                setSelectedMake(tab.id === "all" ? undefined : tab.id)
              }
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                (tab.id === "all" && !selectedMake) || tab.id === selectedMake
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Loading state */}
        {isLoading && (
          <div className="text-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading vehicles...</p>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="text-center py-10">
            <p className="text-red-500">
              Failed to load vehicles. Please try again later.
            </p>
          </div>
        )}

        {/* Car listings */}
        {!isLoading && !error && vehicles && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles &&
              vehicles.length > 0 &&
              vehicles.map((vehicle, i) => (
                <PopularCarCard
                  key={i}
                  id={vehicle.id}
                  make={vehicle.make}
                  model={vehicle.model}
                  year={vehicle.year}
                  price={vehicle.price}
                  mileage={vehicle.mileage}
                  location={vehicle.location}
                  images={vehicle.images}
                />
              ))}
          </div>
        )}

        {/* Empty state */}
        {!isLoading && !error && vehicles?.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-600">No vehicles found.</p>
          </div>
        )}

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

export default ExploreAllVehicles;
