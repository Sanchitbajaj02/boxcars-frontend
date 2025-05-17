import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

const BrandsSection = () => {
  const brands = [
    { id: 1, name: "Audi", logo: "/brands/audi.png" },
    { id: 2, name: "BMW", logo: "/brands/bmw.png" },
    { id: 3, name: "Ford", logo: "/brands/ford.png" },
    { id: 4, name: "Mercedes-Benz", logo: "/brands/mercedes.png" },
    { id: 5, name: "Peugeot", logo: "/brands/peugeot.png" },
    { id: 6, name: "Volkswagen", logo: "/brands/volkswagen.png" },
  ];

  return (
    <section className="bg-(--custom-background) py-20 px-8 lg:px-2 rounded-t-4xl -mt-8 relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-2 justify-between items-center mb-10">
          <h2 className="text-xl lg:text-3xl font-bold text-black">
            Explore Our Premium Brands
          </h2>
          <Link
            href="/brands"
            className="text-sm text-black/75 hover:text-black flex items-center gap-2"
          >
            View All Brands <ArrowUpRight />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={`/brands/${brand.name.toLowerCase()}`}
              className="flex flex-col items-center justify-center group shadow-lg p-4 rounded-md bg-white"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-2">
                <div className="relative w-16 h-16">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    layout="fill"
                    objectFit="contain"
                    className="transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <span className="text-base font-medium text-center text-black">{brand.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
