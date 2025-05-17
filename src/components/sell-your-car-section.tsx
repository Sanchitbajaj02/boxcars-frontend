import React from "react";
import Image from "next/image";
import { CheckIcon, ArrowUpRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "We are the UK's largest provider, with more patrols in more places",
  },
  {
    id: 2,
    title: "You get 24/7 roadside assistance",
  },
  {
    id: 3,
    title: "We fix 4 out of 5 cars at the roadside",
  },
];

const serviceHooks = [
  {
    id: 1,
    title: "CARS FOR SALE",
    hookNumber: 836,
    suffix: "M",
  },
  {
    id: 2,
    title: "DEALER REVIEWS",
    hookNumber: 738,
    suffix: "M",
  },
  {
    id: 3,
    title: "VISITORS PER DAY",
    hookNumber: 100,
    suffix: "M",
  },
  {
    id: 4,
    title: "VERIFIED DEALERS",
    hookNumber: 238,
    suffix: "M",
  },
];

const SellYourCarSection = () => {
  return (
    <section className="bg-white py-20 px-8 lg:px-2">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* upper section */}
        <div className="bg-[#EEF1FB] rounded-3xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left side - Car image */}
            <div className="relative h-[24rem] lg:h-[30rem]">
              <Image
                src="/assets/fair-price-for-your-car.jpg"
                alt="Sell your car"
                layout="fill"
                className="object-cover"
              />
            </div>

            {/* Right side - Sell form */}
            <div className="p-10 flex flex-col justify-center items-start">
              <h2 className="text-xl/normal lg:text-4xl/normal font-bold mb-2 text-black">
                Get A Fair Price For Your Car Sell To Us Today
              </h2>

              <p className="text-black/80 text-base font-normal">
                We are committed to providing our customers with exceptional
                service, competitive pricing, and a wide range of.
              </p>

              <div className="space-y-4 my-8">
                {services &&
                  services.length > 0 &&
                  services.map((service) => {
                    return (
                      <div className="flex items-center gap-3" key={service.id}>
                        <CheckIcon
                          size={20}
                          color="black"
                          className="bg-white rounded-full p-1"
                        />

                        <span className="text-sm text-black">
                          {service.title}
                        </span>
                      </div>
                    );
                  })}
              </div>

              <button className="bg-(--color-blue-custom) hover:bg-(--color-blue-light) text-white font-medium px-6 py-4 text-base m-2 rounded-lg flex items-center gap-2 hover:cursor-pointer transition-colors">
                Get Started <ArrowUpRight />
              </button>
            </div>
          </div>
        </div>

        {/* lower section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 justify-evenly gap-8 lg:gap-0">
          {serviceHooks &&
            serviceHooks.length > 0 &&
            serviceHooks.map((serviceHook) => {
              return (
                <div
                  className="flex flex-col items-center gap-2"
                  key={serviceHook.id}
                >
                  <div className="text-3xl lg:text-5xl text-black font-bold">
                    {serviceHook.hookNumber}{serviceHook.suffix}
                  </div>

                  <p className="tex-sm lg:text-base font-medium text-black/80">{serviceHook.title}</p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default SellYourCarSection;
