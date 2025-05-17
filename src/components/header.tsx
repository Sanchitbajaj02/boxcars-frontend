"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { User2Icon, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    id: "home",
    title: "Home",
    icon: null,
    link: "/",
  },
  {
    id: "listings",
    title: "Listings",
    icon: null,
    link: "/",
  },
  {
    id: "blog",
    title: "Blog",
    icon: null,
    link: "/",
  },
  {
    id: "pages",
    title: "Pages",
    icon: null,
    link: "/",
  },
  {
    id: "about",
    title: "About",
    icon: null,
    link: "/",
  },
  {
    id: "contact",
    title: "Contact",
    icon: null,
    link: "/",
  },
];

const Header = () => {
  const [navbg, setNavbg] = useState("bg-transparent");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        setNavbg("bg-(--blue-dark)");
      } else {
        setNavbg("bg-transparent");
      }
    });

    // return () => {
    //   window.removeEventListener('scroll')
    // }
  }, []);

  return (
    <header className="block py-4 fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto">
        <div
          className={cn(
            "flex flex-row items-center justify-between rounded-full p-4 lg:p-2 transition-colors mx-2 lg:mx-0",
            navbg,
          )}
        >
          {/* Logo */}
          <Link href="/" className="mx-2">
            <Image
              src="/assets/logo.png"
              alt="brand logo"
              title="brand logo"
              width={100}
              height={30}
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems &&
              navItems.length > 0 &&
              navItems.map((navItem) => {
                return (
                  <Link
                    key={navItem.id}
                    href={navItem.link}
                    className="text-white/80 hover:text-white text-base flex flex-row items-center gap-2"
                  >
                    {navItem.title} {navItem.icon}
                  </Link>
                );
              })}

            <Link
              href="/signin"
              className="text-white/80 hover:text-white text-base flex flex-row items-center gap-2"
            >
              <User2Icon size={20} /> Signin
            </Link>

            <Link
              href="/dashboard/list"
              className="bg-white text-black font-medium text-base rounded-full px-4 py-2"
            >
              Submit Listing
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button
              variant="default"
              size="icon"
              className="cursor-pointer bg-(--color-blue-custom)"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X size={24} color="white" />
              ) : (
                <Menu size={24} color="white" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
