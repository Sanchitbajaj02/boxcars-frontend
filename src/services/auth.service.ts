import api, { handleError } from './api.service';
import { cookies } from 'next/headers';

const TOKEN_COOKIE_NAME = 'accessToken';

export interface RegisterData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginData {
  email: string;
  password: string;
}


// const setToken = async (token: string) => {
//   const cookieStore = await cookies();
//   cookieStore.set(TOKEN_COOKIE_NAME, token, {
//     secure: process.env.NODE_ENV === 'production',
//     sameSite: 'strict',
//     maxAge: 60 * 60 * 24 * 7, // 7 days in seconds
//     path: '/',
//   });
// };

// const removeToken = async () => {
//   const cookieStore = await cookies();
//   cookieStore.delete(TOKEN_COOKIE_NAME);
// };

const getToken = async () => {
  const cookieStore = await cookies();
  return cookieStore.get(TOKEN_COOKIE_NAME)?.value;
};



export const register = async (data: RegisterData) => {
  try {
    const { data: response, status } = await api.post('/auth/register', data);
    if (status !== 201) {
      throw new Error("some error")
    }
    return response;
  } catch (error) {
    throw handleError(error);
  }
};

export const login = async (data: LoginData) => {
  try {
    const { data: response, status } = await api.post('/auth/login', data);
    if (status !== 200) {
      throw new Error("some error")
    }
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

export const logout = async (): Promise<void> => {
  try {
    await api.post('/auth/logout');
  } catch {
    throw new Error('Failed to logout');
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await api.get('/auth/me');
    return response.data.user;
  } catch {
    return null;
  }
};

export const isAuthenticated = async (): Promise<boolean> => {
  const token = await getToken();
  return !!token;
};

