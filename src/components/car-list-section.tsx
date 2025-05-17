"use client"
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Define the tab types
type TabType = "new" | "used" | "type" | "brand";

// Define the data structure for each tab
interface CarData {
  id: string;
  name: string;
  url: string;
}

// Sample data for each tab
const tabData: Record<TabType, CarData[]> = {
  new: [
    { id: "ford", name: "Ford Cars", url: "/new-cars/ford" },
    { id: "honda", name: "Honda Cars", url: "/new-cars/honda" },
    { id: "hyundai", name: "Hyundai Cars", url: "/new-cars/hyundai" },
    { id: "infiniti", name: "Infiniti Cars", url: "/new-cars/infiniti" },
    { id: "jaguar", name: "Jaguar Cars", url: "/new-cars/jaguar" },
    { id: "jeep", name: "Jeep Cars", url: "/new-cars/jeep" },
    { id: "chrysler", name: "Chrysler Cars", url: "/new-cars/chrysler" },
    { id: "citroen", name: "Citroen Cars", url: "/new-cars/citroen" },
    { id: "cupra", name: "Cupra Cars", url: "/new-cars/cupra" },
    { id: "dacia", name: "Dacia Cars", url: "/new-cars/dacia" },
    { id: "ds", name: "DS Cars", url: "/new-cars/ds" },
    { id: "fiat", name: "Fiat Cars", url: "/new-cars/fiat" },
    { id: "land-rover", name: "Land Rover Cars", url: "/new-cars/land-rover" },
    { id: "lexus", name: "Lexus Cars", url: "/new-cars/lexus" },
    { id: "mercedes", name: "Mercedes-Benz Cars", url: "/new-cars/mercedes" },
    { id: "mazda", name: "Mazda Cars", url: "/new-cars/mazda" },
    { id: "mg", name: "MG Cars", url: "/new-cars/mg" },
    { id: "kia", name: "Kia Cars", url: "/new-cars/kia" },
    { id: "abarth", name: "Abarth Cars", url: "/new-cars/abarth" },
    { id: "romeo", name: "Romeo Cars", url: "/new-cars/romeo" },
    { id: "audi", name: "Audi Cars", url: "/new-cars/audi" },
    { id: "bentley", name: "Bentley Cars", url: "/new-cars/bentley" },
    { id: "bmw", name: "BMW Cars", url: "/new-cars/bmw" },
    { id: "chevrolet", name: "Chevrolet Cars", url: "/new-cars/chevrolet" },
    { id: "mini", name: "Mini Cars", url: "/new-cars/mini" },
    { id: "mitsubishi", name: "Mitsubishi Cars", url: "/new-cars/mitsubishi" },
    { id: "nissan", name: "Nissan Cars", url: "/new-cars/nissan" },
    { id: "peugeot", name: "Peugeot Cars", url: "/new-cars/peugeot" },
    { id: "porsche", name: "Porsche Cars", url: "/new-cars/porsche" },
    { id: "renault", name: "Renault Cars", url: "/new-cars/renault" },
  ],
  used: [
    { id: "ford-used", name: "Ford Cars", url: "/used-cars/ford" },
    { id: "honda-used", name: "Honda Cars", url: "/used-cars/honda" },
    { id: "toyota-used", name: "Toyota Cars", url: "/used-cars/toyota" },
    {
      id: "volkswagen-used",
      name: "Volkswagen Cars",
      url: "/used-cars/volkswagen",
    },
    { id: "bmw-used", name: "BMW Cars", url: "/used-cars/bmw" },
    {
      id: "mercedes-used",
      name: "Mercedes-Benz Cars",
      url: "/used-cars/mercedes",
    },
    { id: "audi-used", name: "Audi Cars", url: "/used-cars/audi" },
    { id: "nissan-used", name: "Nissan Cars", url: "/used-cars/nissan" },
    { id: "hyundai-used", name: "Hyundai Cars", url: "/used-cars/hyundai" },
    { id: "kia-used", name: "Kia Cars", url: "/used-cars/kia" },
    { id: "mazda-used", name: "Mazda Cars", url: "/used-cars/mazda" },
    { id: "subaru-used", name: "Subaru Cars", url: "/used-cars/subaru" },
    { id: "lexus-used", name: "Lexus Cars", url: "/used-cars/lexus" },
    {
      id: "chevrolet-used",
      name: "Chevrolet Cars",
      url: "/used-cars/chevrolet",
    },
    { id: "jeep-used", name: "Jeep Cars", url: "/used-cars/jeep" },
    { id: "dodge-used", name: "Dodge Cars", url: "/used-cars/dodge" },
    { id: "chrysler-used", name: "Chrysler Cars", url: "/used-cars/chrysler" },
    { id: "buick-used", name: "Buick Cars", url: "/used-cars/buick" },
    { id: "cadillac-used", name: "Cadillac Cars", url: "/used-cars/cadillac" },
    { id: "gmc-used", name: "GMC Cars", url: "/used-cars/gmc" },
    { id: "acura-used", name: "Acura Cars", url: "/used-cars/acura" },
    { id: "infiniti-used", name: "Infiniti Cars", url: "/used-cars/infiniti" },
    { id: "lincoln-used", name: "Lincoln Cars", url: "/used-cars/lincoln" },
    { id: "volvo-used", name: "Volvo Cars", url: "/used-cars/volvo" },
  ],
  type: [
    { id: "sedan", name: "Sedan Cars", url: "/car-types/sedan" },
    { id: "suv", name: "SUV Cars", url: "/car-types/suv" },
    { id: "truck", name: "Truck Cars", url: "/car-types/truck" },
    { id: "coupe", name: "Coupe Cars", url: "/car-types/coupe" },
    {
      id: "convertible",
      name: "Convertible Cars",
      url: "/car-types/convertible",
    },
    { id: "hatchback", name: "Hatchback Cars", url: "/car-types/hatchback" },
    { id: "wagon", name: "Wagon Cars", url: "/car-types/wagon" },
    { id: "van", name: "Van Cars", url: "/car-types/van" },
    { id: "minivan", name: "Minivan Cars", url: "/car-types/minivan" },
    { id: "hybrid", name: "Hybrid Cars", url: "/car-types/hybrid" },
    { id: "electric", name: "Electric Cars", url: "/car-types/electric" },
    { id: "luxury", name: "Luxury Cars", url: "/car-types/luxury" },
    { id: "sports", name: "Sports Cars", url: "/car-types/sports" },
    { id: "compact", name: "Compact Cars", url: "/car-types/compact" },
    { id: "midsize", name: "Midsize Cars", url: "/car-types/midsize" },
    { id: "fullsize", name: "Fullsize Cars", url: "/car-types/fullsize" },
    { id: "crossover", name: "Crossover Cars", url: "/car-types/crossover" },
    { id: "diesel", name: "Diesel Cars", url: "/car-types/diesel" },
  ],
  brand: [
    { id: "ford-brand", name: "Ford Cars", url: "/brands/ford" },
    { id: "honda-brand", name: "Honda Cars", url: "/brands/honda" },
    { id: "hyundai-brand", name: "Hyundai Cars", url: "/brands/hyundai" },
    { id: "infiniti-brand", name: "Infiniti Cars", url: "/brands/infiniti" },
    { id: "jaguar-brand", name: "Jaguar Cars", url: "/brands/jaguar" },
    { id: "jeep-brand", name: "Jeep Cars", url: "/brands/jeep" },
    { id: "chrysler-brand", name: "Chrysler Cars", url: "/brands/chrysler" },
    { id: "citroen-brand", name: "Citroen Cars", url: "/brands/citroen" },
    { id: "cupra-brand", name: "Cupra Cars", url: "/brands/cupra" },
    { id: "dacia-brand", name: "Dacia Cars", url: "/brands/dacia" },
    { id: "ds-brand", name: "DS Cars", url: "/brands/ds" },
    { id: "fiat-brand", name: "Fiat Cars", url: "/brands/fiat" },
    {
      id: "land-rover-brand",
      name: "Land Rover Cars",
      url: "/brands/land-rover",
    },
    { id: "lexus-brand", name: "Lexus Cars", url: "/brands/lexus" },
    {
      id: "mercedes-brand",
      name: "Mercedes-Benz Cars",
      url: "/brands/mercedes",
    },
    { id: "mazda-brand", name: "Mazda Cars", url: "/brands/mazda" },
    { id: "mg-brand", name: "MG Cars", url: "/brands/mg" },
    { id: "kia-brand", name: "Kia Cars", url: "/brands/kia" },
    { id: "abarth-brand", name: "Abarth Cars", url: "/brands/abarth" },
    { id: "romeo-brand", name: "Romeo Cars", url: "/brands/romeo" },
    { id: "audi-brand", name: "Audi Cars", url: "/brands/audi" },
    { id: "bentley-brand", name: "Bentley Cars", url: "/brands/bentley" },
    { id: "bmw-brand", name: "BMW Cars", url: "/brands/bmw" },
    { id: "chevrolet-brand", name: "Chevrolet Cars", url: "/brands/chevrolet" },
    { id: "mini-brand", name: "Mini Cars", url: "/brands/mini" },
    {
      id: "mitsubishi-brand",
      name: "Mitsubishi Cars",
      url: "/brands/mitsubishi",
    },
    { id: "nissan-brand", name: "Nissan Cars", url: "/brands/nissan" },
    { id: "peugeot-brand", name: "Peugeot Cars", url: "/brands/peugeot" },
    { id: "porsche-brand", name: "Porsche Cars", url: "/brands/porsche" },
    { id: "renault-brand", name: "Renault Cars", url: "/brands/renault" },
  ],
};

const CarListSection = () => {
  const [activeTab, setActiveTab] = useState<TabType>("new");

  // Get the data for the active tab
  const activeData = tabData[activeTab];

  // Function to split the data into columns for display
  const getColumnsData = (data: CarData[], columns: number) => {
    const result: CarData[][] = Array.from({ length: columns }, () => []);
    const itemsPerColumn = Math.ceil(data.length / columns);

    data.forEach((item, index) => {
      const columnIndex = Math.floor(index / itemsPerColumn);
      if (columnIndex < columns) {
        result[columnIndex].push(item);
      }
    });

    return result;
  };

  // Split the data into 5 columns
  const columnsData = getColumnsData(activeData, 5);

  return (
    <div className="py-20 px-8 lg:px-2 bg-white text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-2 justify-between items-center mb-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-black text-center lg:text-left mb-4 lg:mb-0">
            Shop BoxCar Your Way
          </h2>
          <Link
            href="/brands"
            className="text-sm text-black/75 hover:text-black flex items-center gap-2"
          >
            View More <ArrowUpRight />
          </Link>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex flex-col lg:flex-row gap-4">
            <button
              onClick={() => setActiveTab("new")}
              className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "new"
                  ? "border-(--color-blue-custom) text-(--color-blue-custom)"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              New Cars For Sale
            </button>
            <button
              onClick={() => setActiveTab("used")}
              className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "used"
                  ? "border-(--color-blue-custom) text-(--color-blue-custom)"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Used Cars For Sale
            </button>
            <button
              onClick={() => setActiveTab("type")}
              className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "type"
                  ? "border-(--color-blue-custom) text-(--color-blue-custom)"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Browse By Type
            </button>
            <button
              onClick={() => setActiveTab("brand")}
              className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "brand"
                  ? "border-(--color-blue-custom) text-(--color-blue-custom)"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Browse By Brand
            </button>
          </nav>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-4">
          {columnsData.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col space-y-4">
              {column.map((item) => (
                <Link
                  key={item.id}
                  href={item.url}
                  className="text-gray-600 hover:text-(--color-blue-custom) transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarListSection;
