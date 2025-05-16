"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";

const tabNavigations = [
  {
    id: "all",
    title: "All",
  },
  {
    id: "new",
    title: "New",
  },
  {
    id: "used",
    title: "Used",
  },
];

const featuredModels = [
  {
    id: "suv",
    title: "SUV",
    iconImage: "/modelIcons/suv.png",
  },
  {
    id: "sedan",
    title: "Sedan",
    iconImage: "/modelIcons/suv.png",
  },
  {
    id: "hatchback",
    title: "Hatchback",
    iconImage: "/modelIcons/suv.png",
  },
  {
    id: "coupe",
    title: "Coupe",
    iconImage: "/modelIcons/suv.png",
  },
  {
    id: "hybrid",
    title: "Hybrid",
    iconImage: "/modelIcons/suv.png",
  },
];

const HeroSection = () => {
  const [active, setActive] = useState<string>("all");
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[url(/assets/background.jpg)] bg-no-repeat bg-cover bg-center bg-black/25 bg-blend-color">
      <div className="max-w-4xl mx-auto h-full flex flex-col items-center justify-center text-white">
        {/* heading sna sub-heading */}
        <div className="space-y-6 mb-8">
          <p className="text-base font-medium text-center">
            Find cars for sale and for rent near you
          </p>
          <h1 className="text-4xl md:text-7xl font-extrabold text-center tracking-wide">
            Find Your Perfect Car
          </h1>
        </div>

        {/* Navigation tabs */}
        <div className="flex flex-row justify-between items-center gap-8 mb-8">
          {tabNavigations &&
            tabNavigations.length > 0 &&
            tabNavigations.map((tabnav) => {
              return (
                <div
                  key={tabnav.id}
                  className={cn(
                    "transition duration-200 hover:cursor-pointer text-base font-medium",
                    tabnav.id === active && "underline underline-offset-8",
                  )}
                  onClick={() => setActive(tabnav.id)}
                >
                  {tabnav.title}
                </div>
              );
            })}
        </div>

        {/* Search form */}
        <div className="w-full max-w-4xl bg-white rounded-full overflow-hidden flex items-center flex-wrap md:flex-nowrap mb-16">
          <div className="flex-1 border-r border-gray-200 px-6 py-4">
            <select className="w-full border-none text-black text-sm focus:outline-none bg-transparent">
              <option>Any Makes</option>
              <option>BMW</option>
              <option>Audi</option>
              <option>Mercedes</option>
              <option>Toyota</option>
            </select>
          </div>

          <div className="flex-1 border-r border-gray-200 px-6 py-4">
            <select className="w-full border-none text-black text-sm focus:outline-none bg-transparent">
              <option>Any Models</option>
              <option>BMW</option>
              <option>Audi</option>
              <option>Mercedes</option>
              <option>Toyota</option>
            </select>
          </div>

          <div className="flex-1 px-6 py-4">
            <select className="w-full border-none text-black text-sm focus:outline-none bg-transparent">
              <option>Prices</option>
              <option>$10k - $20k</option>
              <option>$20k - $30k</option>
              <option>$30k - $50k</option>
              <option>$50k+</option>
            </select>
          </div>

          <button className="bg-[var(--color-blue-custom)] hover:bg-blue-600 text-white font-medium px-6 py-4 text-base m-2 rounded-full flex items-center gap-2 hover:cursor-pointer">
            <SearchIcon size={20} /> Search Cars
          </button>
        </div>

        {/* featured section */}
        <div className="w-full max-w-4xl space-y-6">
          <p className="text-base font-medium text-center">
            Or Browse Featured Model
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch text-center">
            {featuredModels &&
              featuredModels.length > 0 &&
              featuredModels.map((model) => {
                return (
                  <div
                    key={model.id}
                    className="flex flex-row justify-center items-center gap-4 bg-white/25 px-8 py-2 rounded-full hover:cursor-pointer"
                  >
                    <Image
                      src={model.iconImage}
                      alt={model.title}
                      title={model.title}
                      width={30}
                      height={30}
                    />
                    <p className="text-white text-base font-medium">
                      {model.title}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
