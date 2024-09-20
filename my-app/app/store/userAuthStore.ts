import { create } from 'zustand';

type AuthState = {
  access_token: string | null;
  refresh_token: string | null;
};

type AuthAction = {
  setTokens: (access_token: string, refresh_token: string) => void;
};

export const useAuthStore = create<AuthState & AuthAction>((set) => ({
  access_token: null,
  refresh_token: null,
  setTokens: (access_token, refresh_token) => set({ access_token, refresh_token }),
}));