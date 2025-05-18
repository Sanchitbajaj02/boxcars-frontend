"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-(--blue-dark) text-white relative">
      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold mb-2">Join BOXCARS</h2>
            <p className="text-white/70">
              Receive pricing updates, shopping tips & more!
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex-1 max-w-md mx-auto lg:mx-0 w-full"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-4 py-3 text-white bg-(--blue-gray) rounded-full border border-white/10 focus:border-(--color-blue-custom) focus:outline-none transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-(--color-blue-custom) hover:bg-(--color-blue-light) text-white font-medium px-6 py-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-(--color-blue-custom)"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Get in Touch
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Help center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Live chat
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    How it works
                  </Link>
                </li>
              </ul>
            </div>

            {/* Our Brands */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Our Brands</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Toyota
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Porsche
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Audi
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    BMW
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Ford
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Nissan
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Peugeot
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Volkswagen
                  </Link>
                </li>
              </ul>
            </div>

            {/* Vehicles Type */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Vehicles Type</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Sedan
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Hatchback
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    SUV
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Hybrid
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Electric
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Coupe
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Truck
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Convertible
                  </Link>
                </li>
              </ul>
            </div>

            {/* Our Mobile App & Connect With Us */}
            <div className="space-y-4 max-md:col-span-2">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Our Mobile App</h3>
                <div className="space-y-4 w-2/3 lg:w-full">
                  <Link href="#" className="inline-block">
                    <Image
                      src="/assets/download-apple.png"
                      alt="title"
                      width={800}
                      height={500}
                      className=""
                    />
                  </Link>
                  <Link href="#" className="inline-block">
                    <Image
                      src="/assets/donwload-google.png"
                      alt="title"
                      width={800}
                      height={500}
                      className=""
                    />
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    <Facebook size={20} />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    <Twitter size={20} />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    <Instagram size={20} />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    <Linkedin size={20} />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="py-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-4 items-center justify-between flex-wrap">
          <p className="text-sm text-white/70 hover:text-white">
            Copyright &copy; {new Date().getFullYear()} example.com | All Rights
            Reserved
          </p>

          <div className="space-x-4">
            <Link
              href="/terms-and-conditions"
              className="text-sm text-white/70 hover:text-white transition-colors duration-200"
            >
              Terms & Conditions
            </Link>
            <span className="text-white/70">•</span>
            <Link
              href="/privacy-policy"
              className="text-sm text-white/70 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-(--color-blue-custom) hover:bg-(--color-blue-light) transition-colors duration-200 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-(--color-blue-custom) z-50 hover:cursor-pointer"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
