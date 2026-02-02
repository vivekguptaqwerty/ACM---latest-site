import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { User } from "@/lib/mockData";

// Mock user - set to null for no auth, or provide a user object for logged-in state
const mockUser: User | null = null;

async function fetchUser(): Promise<User | null> {
  // Return mock user (disabled for static frontend)
  return mockUser;
}

async function logout(): Promise<void> {
  // No-op for static frontend
  console.log("Logout clicked - auth disabled in frontend-only mode");
}

export function useAuth() {
  const queryClient = useQueryClient();
  const { data: user, isLoading } = useQuery<User | null>({
    queryKey: ["user"],
    queryFn: fetchUser,
    retry: false,
    staleTime: Infinity,
  });

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.setQueryData(["user"], null);
    },
  });

  return {
    user,
    isLoading: false,
    isAuthenticated: !!user,
    logout: logoutMutation.mutate,
    isLoggingOut: logoutMutation.isPending,
  };
}
