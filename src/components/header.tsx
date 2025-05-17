"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { User2Icon, Menu, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Sidebar,
  SidebarContent,
  useSidebar,
  SidebarMenu,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

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

const SidebarComponent = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <Sidebar className="bg-white py-4 px-4">
      <SidebarHeader className="mb-4 ml-auto">
        <Button
          variant="default"
          size="icon"
          className="cursor-pointer bg-(--color-blue-custom)"
          onClick={() => toggleSidebar()}
        >
          <XIcon size={24} color="white" />
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="gap-4 px-4">
          {navItems.map((cert, i) => (
            <SidebarMenuItem key={i}>
              <Link
                href={"/"}
                className="text-white/80 hover:text-white text-sm transition-colors"
              >
                {cert.title}
              </Link>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem className="mb-4">
            <Link
              href="/signin"
              className="text-white/80 hover:text-white text-base flex flex-row items-center gap-2"
            >
              <User2Icon size={20} /> Signin
            </Link>
          </SidebarMenuItem>

          <SidebarMenuItem className="mb-4">
            <Link href="/dashboard/list">
              <Button
                size="lg"
                className="bg-white text-black font-medium text-base rounded-full hover:cursor-pointer"
              >
                Submit Listing
              </Button>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

const Header = () => {
  const [navbg, setNavbg] = useState("bg-(--blue-dark) lg:bg-transparent");
  const { toggleSidebar } = useSidebar();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setNavbg("bg-(--blue-dark)");
      } else {
        setNavbg("bg-(--blue-dark) lg:bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="block py-4 fixed w-full top-0 z-50">
      <SidebarComponent toggleSidebar={toggleSidebar} />
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

            <Link href="/dashboard/list">
              <Button
                size="lg"
                className="bg-white text-black font-medium text-base rounded-full hover:cursor-pointer"
              >
                Submit Listing
              </Button>
            </Link>
          </nav>

          <div className="block md:hidden">
            <Button
              variant="default"
              size="icon"
              className="cursor-pointer bg-(--color-blue-custom)"
              onClick={() => toggleSidebar()}
            >
              <Menu size={24} color="white" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
