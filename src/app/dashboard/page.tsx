"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { logout } from "@/services/auth.service";
import { toast } from "sonner";

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Successfully logged out!");
      router.push("/signin");
    } catch {
      toast.error("Failed to logout. Please try again.");
    }
  };

  return (
    <section className="py-20 px-8 lg:px-2 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-2 justify-center items-center mb-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-white text-center lg:text-left mb-4 lg:mb-0">
            This is a dashboard component
          </h2>
          <Button
            onClick={handleLogout}
            size="lg"
            className="bg-(--color-blue-custom) hover:bg-(--color-blue-light) text-white font-medium px-6 py-4 text-base rounded-lg flex items-center gap-2 hover:cursor-pointer transition-colors"
          >
            Logout <ArrowUpRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}
