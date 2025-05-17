import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const CtaSection = () => {
  return (
    <div className="py-20 px-8 lg:px-2 bg-white rounded-b-4xl relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Buy a car */}
          <div className="bg-[#E9F2FF] lg:p-16 rounded-3xl p-8 text-black">
            <h2 className="font-bold text-black text-3xl mb-4 lg:leading-relaxed">
              Are You Looking <br /> For a Car ?
            </h2>
            <p className="text-black/75 text-base font-medium lg:leading-6 mb-8">
              We are committed to providing our customers with <br />{" "}
              exceptional service.
            </p>

            <div className="flex justify-between items-center">
              <Link href="/vehicles">
                <button className="bg-(--color-blue-custom) hover:bg-(--color-blue-light) text-white font-medium px-6 py-4 text-base rounded-lg flex items-center gap-2 hover:cursor-pointer transition-colors">
                  Get Started <ArrowUpRight />
                </button>
              </Link>

              <Image
                src="/assets/cta-1.png"
                alt="Are You Looking For a Car?"
                width={100}
                height={100}
                className="hidden lg:inline-block"
              />
            </div>
          </div>

          {/* Sell a car */}

          <div className="bg-[#FFE9F3] lg:p-16 rounded-3xl p-8 text-black">
            <h2 className="font-bold text-black text-3xl mb-4 lg:leading-relaxed">
              Do You Want to <br /> Sell a Car ?
            </h2>
            <p className="text-black/75 text-base font-medium leading-6 mb-8">
              We are committed to providing our customers with <br />{" "}
              exceptional service.
            </p>

            <div className="flex justify-between items-center">
              <Link href="/vehicles">
                <button className="bg-(--blue-dark) hover:bg-(--blue-dark) text-white font-medium px-6 py-4 text-base rounded-lg flex items-center gap-2 hover:cursor-pointer transition-colors">
                  Get Started <ArrowUpRight />
                </button>
              </Link>

              <Image
                src="/assets/cta-2.png"
                alt="Are You Looking For a Car?"
                width={100}
                height={100}
                className="hidden lg:inline-block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
