import Link from "next/link";
import VehicleListingForm from "@/components/submit-listing/vehicle-listing-form";
import { ChevronLeft } from "lucide-react";

export default function SubmitListing() {
  return (
    <main className="py-20 px-8 lg:px-2">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-row gap-2 justify-start items-center mb-10">
          <Link href="/">
            <ChevronLeft size={36} />
          </Link>
          <h1 className="text-2xl lg:text-4xl font-bold text-white text-center lg:text-left">
            Add New Vehicle
          </h1>
        </div>
        <VehicleListingForm />
      </div>
    </main>
  );
}
