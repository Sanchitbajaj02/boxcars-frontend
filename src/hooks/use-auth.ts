import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { login, register, LoginData, RegisterData } from '@/services/auth.service';
import { toast } from 'sonner';

export function useAuth() {
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: (data: LoginData) => login(data),
    onSuccess: () => {
      toast.success('Successfully logged in!');
      router.push('/dashboard');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to login');
    },
  });

  const registerMutation = useMutation({
    mutationFn: (data: RegisterData) => register(data),
    onSuccess: () => {
      toast.success('Successfully registered!');
      router.push('/signin');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to register');
    },
  });

  return {
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    isLoading: loginMutation.isPending || registerMutation.isPending,
  };
} 