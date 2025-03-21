import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "@/types";

interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isSidebarOpen: boolean;
  login: (user: User) => void;
  logout: () => void;
  setIsLoading: (isLoading: boolean) => void;
  toggleSidebar: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      isSidebarOpen: true,
      login: (user: User) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
      setIsLoading: (isLoading: boolean) => set({ isLoading }),
      toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
    }),
    {
      name: "app-store",
      skipHydration: true,
    }
  )
); 