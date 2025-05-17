"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Testimonial data type
type Testimonial = {
  id: number;
  name: string;
  title: string;
  rating: number;
  content: string;
  image: string;
};

// Sample testimonial data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ali TUFAN",
    title: "Designer",
    rating: 5.0,
    content:
      "I'd suggest Macklin Motors Nissan Glasgow South to a friend because I had great service from my salesman Patrick and all of the team.",
    image: "/assets/sample-customer.png",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Marketing Manager",
    rating: 4.8,
    content:
      "The team at Macklin Motors was incredibly helpful. They made the car buying process smooth and enjoyable. I'm very satisfied with my purchase.",
    image: "/assets/sample-customer.png",
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Software Engineer",
    rating: 5.0,
    content:
      "Excellent customer service from start to finish. The staff was knowledgeable and patient with all my questions. Would definitely recommend!",
    image: "/assets/sample-customer.png",
  },
  {
    id: 4,
    name: "Emma Wilson",
    title: "Architect",
    rating: 4.9,
    content:
      "I was impressed by the professionalism and attention to detail. The follow-up service has been outstanding as well. Five stars!",
    image: "/assets/sample-customer.png",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-(--custom-background) py-20 px-8 lg:px-2 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl lg:text-4xl font-bold text-black text-center lg:text-left mb-4 lg:mb-0">
            What our customers say
          </h2>
          <p className="text-sm text-black/75 hover:text-black text-center lg:text-left font-medium">
            Rated <span className="font-semibold">4.7</span> / 5 based on{" "}
            <span className="font-semibold">28,370</span> reviews Showing our 4
            & 5 star reviews
          </p>
        </div>

        <div className="relative">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            {/* Testimonial Image */}
            <div className="w-full lg:w-1/3">
              <div className="relative overflow-hidden rounded-lg aspect-[4/5] lg:aspect-square">
                <Image
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt={currentTestimonial.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="w-full md:w-2/3 lg:w-3/4">
              <div className="flex items-center mb-4">
                {/* Star Rating */}
                <div className="flex text-[#E1C03F] mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#E1C03F" strokeWidth={0} />
                  ))}
                </div>
                <span className="bg-[#E1C03F] text-white text-xs font-bold px-2 py-1 rounded">
                  {currentTestimonial.rating.toFixed(1)}
                </span>
              </div>

              <h3 className="font-semibold text-black text-xl">
                {currentTestimonial.name}
              </h3>
              <p className="text-black/75 text-base mb-4 font-medium">
                {currentTestimonial.title}
              </p>

              <p className="text-black/75 text-lg lg:text-xl leading-relaxed">
                {currentTestimonial.content}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
