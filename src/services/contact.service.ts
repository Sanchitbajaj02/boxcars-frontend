import api, { handleError } from './api.service';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

/**
 * Submit a contact form
 */
export const submitContactForm = async (data: ContactFormData): Promise<void> => {
  try {
    await api.post('/contact', data);
  } catch (error) {
    throw handleError(error);
  }
};

// Export all functions as a single object for convenience
export const contactService = {
  submitContactForm,
}; 