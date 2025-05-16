import React from "react";
import Link from "next/link";
import Image from "next/image";
import { User2Icon } from "lucide-react";

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
  return (
    <header className="block py-6 fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-row items-center justify-between">
          {/* Logo */}
          <Link href="/">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
