"use client";

import { useForm, Controller, ControllerRenderProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { createVehicle } from "@/services/vehicle.service";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { ArrowUpRight } from "lucide-react";

const currentYear = new Date().getFullYear() + 1;

// Define the form schema using Zod
const vehicleFormSchema = z.object({
  listingTitle: z.string().min(3, { message: "Listing title is required" }),
  category: z.string().min(1, { message: "Category is required" }),
  label: z.string().optional(),
  condition: z.string().min(1, { message: "Condition is required" }),
  type: z.string().min(1, { message: "Type is required" }),
  make: z.string().optional(),
  model: z.string().optional(),
  year: z.number().int().gte(1900).lte(currentYear).optional(),
  offerType: z.string().optional(),
  driveType: z.string().optional(),
  transmission: z.string().optional(),
  fuelType: z.string().optional(),
  mileage: z.string().optional(),
  engineSize: z.string().optional(),
  cylinder: z.string().optional(),
  color: z.string().optional(),
  door: z.string().optional(),
  vin: z.string().optional(),
  listingDescription: z.string().optional(),
  price: z.string().optional(),
});

type VehicleFormValues = z.infer<typeof vehicleFormSchema>;

// Sample data for dropdowns
const categories = ["Cars", "Trucks", "SUVs", "Vans", "Motorcycles"];
const conditions = ["New", "Used", "Certified Pre-Owned"];
const vehicleTypes = [
  "Sedan",
  "Coupe",
  "Hatchback",
  "Convertible",
  "SUV",
  "Truck",
  "Van",
];
const makes = [
  "Toyota",
  "Honda",
  "Ford",
  "Chevrolet",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Nissan",
];
const years = Array.from({ length: 30 }, (_, i) =>
  (new Date().getFullYear() - i).toString(),
);
const offerTypes = ["For Sale", "For Rent", "For Lease"];
const driveTypes = ["FWD", "RWD", "AWD", "4WD"];
const transmissions = ["Automatic", "Manual", "CVT", "Semi-Automatic"];
const fuelTypes = [
  "Gasoline",
  "Diesel",
  "Electric",
  "Hybrid",
  "Plug-in Hybrid",
];
const cylinders = ["3", "4", "5", "6", "8", "10", "12"];
const colors = [
  "Black",
  "White",
  "Silver",
  "Gray",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Orange",
  "Brown",
];
const doors = ["2", "3", "4", "5"];

const VehicleListingForm = () => {
  // Initialize form with react-hook-form
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<VehicleFormValues>({
    resolver: zodResolver(vehicleFormSchema),
    defaultValues: {},
  });

  // Set up mutation with TanStack Query
  const createVehicleMutation = useMutation({
    mutationFn: (data: VehicleFormValues) =>
      createVehicle({
        ...data,
        price: data.price ? parseFloat(data.price) : 0,
        description: data.listingDescription || "",
        features: [],
        images: [],
        location: "",
        make: data.make || "",
        model: data.model || "",
        year: data.year || 2000,
        offerType: data.offerType || "",
        driveType: data.driveType || "",
        transmission: data.transmission || "",
        fuelType: data.fuelType || "",
        mileage: data.mileage ? parseInt(data.mileage.replace(/,/g, "")) : 0,
        engineSize: data.engineSize ? parseFloat(data.engineSize) : 0,
        cylinder: data.cylinder ? parseInt(data.cylinder) : 0,
        color: data.color || "",
        door: data.door ? parseInt(data.door) : 0,
        vin: data.vin || "",
      }),
    onSuccess: () => {
      toast.success("Vehicle listing created successfully");
    },
    onError: (error) => {
      toast.error("Failed to create vehicle listing. Please try again.");
      console.error("Error creating vehicle:", error);
    },
  });

  // Form submission handler
  const onSubmit = (data: VehicleFormValues) => {
    createVehicleMutation.mutate(data);
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="listingTitle"
              className="text-sm font-medium text-gray-700"
            >
              Listing Title
            </label>
            <div className="relative">
              <Input
                id="listingTitle"
                {...register("listingTitle")}
                className="border-gray-300 w-full text-black"
                placeholder="Enter listing title"
              />
            </div>
            {errors.listingTitle && (
              <p className="text-sm text-red-500">
                {errors.listingTitle.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="price"
              className="text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <div className="relative">
              <Input
                id="price"
                type="number"
                {...register("price")}
                className="border-gray-300 w-full text-black"
                placeholder="Enter price"
              />
            </div>
            {errors.price && (
              <p className="text-sm text-red-500">{errors.price.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="category"
              className="text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <Controller
              name="category"
              control={control}
              render={({
                field,
              }: {
                field: ControllerRenderProps<VehicleFormValues, "category">;
              }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="border-gray-300 w-full text-black">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem
                        key={category.toLowerCase()}
                        value={category.toLowerCase()}
                      >
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.category && (
              <p className="text-sm text-red-500">{errors.category.message}</p>
            )}
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="condition"
              className="text-sm font-medium text-gray-700"
            >
              Condition
            </label>
            <Controller
              name="condition"
              control={control}
              render={({
                field,
              }: {
                field: ControllerRenderProps<VehicleFormValues, "condition">;
              }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="border-gray-300 w-full text-black">
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    {conditions.map((condition) => (
                      <SelectItem
                        key={condition.toLowerCase()}
                        value={condition.toLowerCase()}
                      >
                        {condition}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.condition && (
              <p className="text-sm text-red-500">{errors.condition.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="type" className="text-sm font-medium text-gray-700">
              Type
            </label>
            <Controller
              name="type"
              control={control}
              render={({
                field,
              }: {
                field: ControllerRenderProps<VehicleFormValues, "type">;
              }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="border-gray-300 w-full text-black">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {vehicleTypes.map((type) => (
                      <SelectItem
                        key={type.toLowerCase()}
                        value={type.toLowerCase()}
                      >
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.type && (
              <p className="text-sm text-red-500">{errors.type.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="make" className="text-sm font-medium text-gray-700">
              Make
            </label>
            <Controller
              name="make"
              control={control}
              render={({
                field,
              }: {
                field: ControllerRenderProps<VehicleFormValues, "make">;
              }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="border-gray-300 w-full text-black">
                    <SelectValue placeholder="Select make" />
                  </SelectTrigger>
                  <SelectContent>
                    {makes.map((make) => (
                      <SelectItem
                        key={make.toLowerCase()}
                        value={make.toLowerCase()}
                      >
                        {make}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="model"
              className="text-sm font-medium text-gray-700"
            >
              Model
            </label>
            <Controller
              name="model"
              control={control}
              render={({
                field,
              }: {
                field: ControllerRenderProps<VehicleFormValues, "model">;
              }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="border-gray-300 w-full text-black">
                    <SelectValue placeholder="Select model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="camry">Camry</SelectItem>
                    <SelectItem value="civic">Civic</SelectItem>
                    <SelectItem value="accord">Accord</SelectItem>
                    <SelectItem value="f-150">F-150</SelectItem>
                    <SelectItem value="silverado">Silverado</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="year" className="text-sm font-medium text-gray-700">
              Year
            </label>
            <Controller
              name="year"
              control={control}
              render={({
                field,
              }: {
                field: ControllerRenderProps<VehicleFormValues, "year">;
              }) => (
                <Select
                  onValueChange={(value) => field.onChange(parseInt(value))}
                  value={field.value?.toString()}
                >
                  <SelectTrigger className="border-gray-300 w-full text-black">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="offerType"
              className="text-sm font-medium text-gray-700"
            >
              Offer Type
            </label>
            <Controller
              name="offerType"
              control={control}
              render={({
                field,
              }: {
                field: ControllerRenderProps<VehicleFormValues, "offerType">;
              }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="border-gray-300 w-full text-black">
                    <SelectValue placeholder="Select offer" />
                  </SelectTrigger>
                  <SelectContent>
                    {offerTypes.map((offerType) => (
                      <SelectItem
                        key={offerType.toLowerCase()}
                        value={offerType.toLowerCase()}
                      >
                        {offerType}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="driveType"
              className="text-sm font-medium text-gray-700"
            >
              Drive Type
            </label>
            <Controller
              name="driveType"
              control={control}
              render={({
                field,
              }: {
                field: ControllerRenderProps<VehicleFormValues, "driveType">;
              }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="border-gray-300 w-full text-black">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {driveTypes.map((driveType) => (
                      <SelectItem
                        key={driveType.toLowerCase()}
                        value={driveType.toLowerCase()}
                      >
                        {driveType}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="transmission"
              className="text-sm font-medium text-gray-700"
            >
              Transmission
            </label>
            <Controller
              name="transmission"
              control={control}
              render={({
                field,
              }: {
                field: ControllerRenderProps<VehicleFormValues, "transmission">;
              }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="border-gray-300 w-full text-black">
                    <SelectValue placeholder="Select transmission" />
                  </SelectTrigger>
                  <SelectContent>
                    {transmissions.map((transmission) => (
                      <SelectItem
                        key={transmission.toLowerCase()}
                        value={transmission.toLowerCase()}
                      >
                        {transmission}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="fuelType"
              className="text-sm font-medium text-gray-700"
            >
              Fuel Type
            </label>
            <Controller
              name="fuelType"
              control={control}
              render={({
                field,
              }: {
                field: ControllerRenderProps<VehicleFormValues, "fuelType">;
              }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="border-gray-300 w-full text-black">
                    <SelectValue placeholder="Select fuel" />
                  </SelectTrigger>
                  <SelectContent>
                    {fuelTypes.map((fuelType) => (
                      <SelectItem
                        key={fuelType.toLowerCase()}
                        value={fuelType.toLowerCase()}
                      >
                        {fuelType}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>

        {/* Row 5 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="mileage"
              className="text-sm font-medium text-gray-700"
            >
              Mileage
            </label>
            <div className="relative">
              <Input
                id="mileage"
                {...register("mileage")}
                className="border-gray-300 w-full text-black"
                placeholder="Enter mileage"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="engineSize"
              className="text-sm font-medium text-gray-700"
            >
              Engine Size
            </label>
            <div className="relative">
              <Input
                id="engineSize"
                {...register("engineSize")}
                className="border-gray-300 w-full text-black"
                placeholder="Engine size"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="cylinder"
              className="text-sm font-medium text-gray-700"
            >
              Cylinder
            </label>
            <Controller
              name="cylinder"
              control={control}
              render={({
                field,
              }: {
                field: ControllerRenderProps<VehicleFormValues, "cylinder">;
              }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="border-gray-300 w-full text-black">
                    <SelectValue placeholder="Select cylinder" />
                  </SelectTrigger>
                  <SelectContent>
                    {cylinders.map((cylinder) => (
                      <SelectItem key={cylinder} value={cylinder}>
                        {cylinder}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>

        {/* Row 6 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="color"
              className="text-sm font-medium text-gray-700"
            >
              Color
            </label>
            <Controller
              name="color"
              control={control}
              render={({
                field,
              }: {
                field: ControllerRenderProps<VehicleFormValues, "color">;
              }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="border-gray-300 w-full text-black">
                    <SelectValue placeholder="Select color" />
                  </SelectTrigger>
                  <SelectContent>
                    {colors.map((color) => (
                      <SelectItem
                        key={color.toLowerCase()}
                        value={color.toLowerCase()}
                      >
                        {color}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="door" className="text-sm font-medium text-gray-700">
              Door
            </label>
            <Controller
              name="door"
              control={control}
              render={({
                field,
              }: {
                field: ControllerRenderProps<VehicleFormValues, "door">;
              }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="border-gray-300 w-full text-black">
                    <SelectValue placeholder="Select door" />
                  </SelectTrigger>
                  <SelectContent>
                    {doors.map((door) => (
                      <SelectItem key={door} value={door}>
                        {door}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="vin" className="text-sm font-medium text-gray-700">
              VIN
            </label>
            <div className="relative">
              <Input
                id="vin"
                {...register("vin")}
                className="border-gray-300 w-full text-black"
                placeholder="Enter VIN"
              />
            </div>
          </div>
        </div>

        {/* Row 7 - Description */}
        <div className="space-y-2">
          <label
            htmlFor="listingDescription"
            className="text-sm font-medium text-gray-700"
          >
            Listing Description
          </label>
          <Textarea
            id="listingDescription"
            {...register("listingDescription")}
            className="min-h-[150px] border-gray-300 w-full text-black"
            placeholder="Enter listing description"
          />
        </div>

        <div className="flex justify-end">
          <Button
            size="lg"
            type="submit"
            className="bg-(--color-blue-custom) hover:bg-(--color-blue-light) text-white font-medium px-6 py-4 text-base rounded-lg flex items-center gap-2 hover:cursor-pointer transition-colors"
            disabled={createVehicleMutation.isPending}
          >
            Logout <ArrowUpRight size={20} />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default VehicleListingForm;
