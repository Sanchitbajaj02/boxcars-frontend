import axios, { AxiosError } from 'axios';
import { cookies } from 'next/headers';

const TOKEN_COOKIE_NAME = 'accessToken';

// Create axios instance with default config
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Important for handling cookies
});

// Request interceptor for adding auth token
api.interceptors.request.use(
  async (config) => {
    // initialize cookies store
    const cookiesStore = await cookies()

    // Get token from cookies if it exists
    const token = cookiesStore.get(TOKEN_COOKIE_NAME)?.value

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export const handleError = (error: unknown): Error => {
  if (error instanceof AxiosError) {
    const message = error.response?.data?.message || 'An error occurred';
    return new Error(message);
  } else if (error instanceof Error) {
    return error;
  } else {
    return new Error('An unexpected error occurred');
  }
};

export default api; 