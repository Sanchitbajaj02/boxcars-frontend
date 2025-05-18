import api, { handleError } from './api.service';

export type Vehicle = {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  condition: string;
  description: string;
  features: string[];
  images: string[];
  location: string;
  createdAt: string;
  updatedAt: string;
}

export type CreateVehicleData = {
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  condition: string;
  description: string;
  features: string[];
  images: string[];
  location: string;
  offerType: string;
  driveType: string;
  engineSize: number;
  cylinder: number;
  color: string;
  door: number;
  vin: string;
  listingTitle: string;
  category: string;
  type: string;
  label?: string;
}

export type UpdateVehicleData = Partial<CreateVehicleData>

/**
 * Get all vehicles with optional filtering
 */
export const getAllVehicles = async (params?: {
  make?: string;
  model?: string;
  minPrice?: number;
  maxPrice?: number;
  minYear?: number;
  maxYear?: number;
  fuelType?: string;
  transmission?: string;
  condition?: string;
  location?: string;
}): Promise<Vehicle[]> => {
  try {
    const response = await api.get<Vehicle[]>('/vehicles', { params });
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

/**
 * Get a single vehicle by ID
 */
export const getVehicleById = async (vehicleId: string): Promise<Vehicle> => {
  try {
    const response = await api.get<Vehicle>(`/vehicles/${vehicleId}`);
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

/**
 * Create a new vehicle
 */
export const createVehicle = async (data: CreateVehicleData): Promise<Vehicle> => {
  try {
    const response = await api.post<Vehicle>('/vehicles', data);
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

/**
 * Update an existing vehicle
 */
export const updateVehicle = async (
  vehicleId: string,
  data: UpdateVehicleData
): Promise<Vehicle> => {
  try {
    const response = await api.put<Vehicle>(`/vehicles/${vehicleId}`, data);
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

/**
 * Delete a vehicle
 */
export const deleteVehicle = async (vehicleId: string): Promise<void> => {
  try {
    await api.delete(`/vehicles/${vehicleId}`);
  } catch (error) {
    throw handleError(error);
  }
};
