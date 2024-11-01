import { create } from "zustand";
import { signIn, signOut } from "next-auth/react";

interface LoginCredentials {
  identifier: string;
  password: string;
  remember?: boolean;
}

interface AuthStore {
  isModalOpen: boolean;
  isLoading: boolean;
  isInitialized: boolean;
  error: string | null;
  activeView: "login" | "signup" | "forgot-password";

  setModalOpen: (open: boolean) => void;
  setActiveView: (view: "login" | "signup" | "forgot-password") => void;
  clearError: () => void;

  login: (credentials: LoginCredentials) => Promise<void>;
  socialLogin: (provider: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isModalOpen: false,
  isLoading: false,
  isInitialized: false,
  error: null,
  activeView: "login",

  setModalOpen: (open) => set({ isModalOpen: open }),
  setActiveView: (view) => set({ activeView: view }),
  clearError: () => set({ error: null }),

  login: async (credentials) => {
    set({ isLoading: true });
    try {
      const result = await signIn("credentials", {
        identifier: credentials.identifier,
        password: credentials.password,
        remember: credentials.remember,
        redirect: false,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      set({ isLoading: false });
      window.location.reload();
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  socialLogin: async (provider) => {
    set({ isLoading: true });
    try {
      await signIn(provider, { redirect: false });
      set({ isModalOpen: false });
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  logout: async () => {
    set({ isLoading: true });
    try {
      const result = await signOut({ redirect: false });

      if (result) {
        window.location.reload();
      }
    } finally {
      set({ isLoading: false });
    }
  },
}));
