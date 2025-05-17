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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-(--blue-dark) text-white">
      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto px-8 lg:px-2 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-2xl font-bold mb-2">Join BOXCARS</h2>
            <p className="text-white/70">
              Receive pricing updates, shopping tips & more!
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex-1 bg-(--blue-gray) rounded-full flex flex-row justify-between max-w-md ml-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-2 px-4 py-2 text-white border-none focus:outline"
              required
            />
            <button
              type="submit"
              className="bg-(--color-blue-custom) hover:bg-(--color-blue-light) text-white font-medium px-6 py-3 text-base m-2 rounded-full  hover:cursor-pointer transition-colors"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      <hr className="border-white/50" />

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
                  className="text-white/70 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
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
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Help center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Live chat
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
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
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Toyota
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Porsche
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Audi
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  BMW
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Ford
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Nissan
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Peugeot
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
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
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Sedan
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Hatchback
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  SUV
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Hybrid
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Electric
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Coupe
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Truck
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
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
              <div className="space-y-4">
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
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-white/50" />

      {/* Copyright Section */}
      <div className="py-8">
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
            <span className="text-white/70">•</span>
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
