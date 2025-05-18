import React from "react";
import VehicleListingForm from "@/components/submit-listing/vehicle-listing-form";

export default function SubmitListing() {
  return (
    <main className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Add New Vehicle</h1>
        <VehicleListingForm />
      </div>
    </main>
  );
}
