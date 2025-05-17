import React from "react";
import Image from "next/image";

interface FeatureCardProps {
  id?: number;
  icon: string;
  title: string;
  description: string;
}

const whyChooseUsServices = [
  {
    id: 1,
    icon: "/why-choose-us/choose-1.png",
    title: "Special Financing Offers",
    description:
      "Our stress-free finance department that can find financial solutions to save you money.",
  },
  {
    id: 2,
    icon: "/why-choose-us/choose-2.png",
    title: "Trusted Car Dealership",
    description:
      "Our stress-free finance department that can find financial solutions to save you money.",
  },
  {
    id: 3,
    icon: "/why-choose-us/choose-3.png",
    title: "Transparent Pricing",
    description:
      "Our stress-free finance department that can find financial solutions to save you money.",
  },
  {
    id: 4,
    icon: "/why-choose-us/choose-4.png",
    title: "Expert Car Service",
    description:
      "Our stress-free finance department that can find financial solutions to save you money.",
  },
];

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow space-y-4">
      <div className="relative w-16 h-16">
        <Image
          src={icon}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="transition-all duration-300 group-hover:scale-110"
        />
      </div>

      <h3 className="text-base font-medium text-black">{title}</h3>

      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20 px-8 lg:px-2 relative">
      <div className="max-w-6xl mx-auto space-y-8">
        <h2 className="text-2xl lg:text-4xl font-bold text-black text-center lg:text-left">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsServices &&
            whyChooseUsServices.length > 0 &&
            whyChooseUsServices.map((service) => {
              return (
                <FeatureCard
                  key={service.id}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
