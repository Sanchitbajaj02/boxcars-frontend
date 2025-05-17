"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log("Email submitted:", email);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#050B20] text-white">
      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto px-8 lg:px-2 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Join BOXCARS</h2>
            <p className="text-white/70">
              Receive pricing updates, shopping tips & more!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex w-full md:w-auto">
            <div className="relative flex-grow max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-l-full bg-[#1E2235] text-white border-none focus:outline-none focus:ring-2 focus:ring-[#4361EE]"
                required
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-6 rounded-r-full bg-(--color-blue-custom) hover:bg-(--color-blue-light) transition-colors duration-200 text-white font-medium"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>

      <hr className="border-[#2A2E3F]" />

      {/* Links Section */}
      <div className="max-w-6xl mx-auto px-8 lg:px-2 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  Help center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  Live chat
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  How it works
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Brands */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Brands</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  Toyota
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  Porsche
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  Audi
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  BMW
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  Ford
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  Nissan
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  Peugeot
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  Volkswagen
                </Link>
              </li>
            </ul>
          </div>

          {/* Vehicles Type */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Vehicles Type</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  Sedan
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  Hatchback
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  SUV
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  Hybrid
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  Electric
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  Coupe
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  Truck
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  Convertible
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Mobile App & Connect With Us */}
          <div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Our Mobile App</h3>
              <div className="space-y-3">
                <Link
                  href="#"
                  className="flex items-center bg-[#1E2235] hover:bg-[#2A2E3F] transition-colors p-3 rounded-lg"
                >
                  <span className="mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-apple"
                    >
                      <path d="M12 20.94c1.5 0 2.75-.67 3.95-1.89a8.8 8.8 0 0 0 2.05-5.55c0-2.84-1.5-4.73-3.55-5.67-1-.45-2.2-.7-3.45-.7-1 0-2.2.25-3.45.7C5.5 8.77 4 10.66 4 13.5a8.8 8.8 0 0 0 2.05 5.55c1.2 1.22 2.45 1.89 3.95 1.89Z"></path>
                      <path d="M12 8.5V3"></path>
                      <path d="M15.5 6H8.5"></path>
                    </svg>
                  </span>
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="font-medium">Apple Store</div>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="flex items-center bg-[#1E2235] hover:bg-[#2A2E3F] transition-colors p-3 rounded-lg"
                >
                  <span className="mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="3 3 21 12 3 21 3 3"></polygon>
                    </svg>
                  </span>
                  <div>
                    <div className="text-xs">Get it on</div>
                    <div className="font-medium">Google Play</div>
                  </div>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="text-[#A0A3B1] hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="py-8 border-t border-white/50">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-4 items-center justify-between">
          <p className="text-sm text-white/70 hover:text-white">
            Copyright &copy; {new Date().getFullYear()} example.com | All Rights
            Reserved
          </p>

          <div className="space-x-4">
            <Link
              href="/terms-and-conditions"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
            <span className="text-[#A0A3B1]">•</span>
            <Link
              href="/privacy-policy"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-(--color-blue-custom) hover:bg-(--color-blue-light) transition-colors text-white shadow-lg focus:outline-none z-50 hover:cursor-pointer"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
