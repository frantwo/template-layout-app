import { create } from 'zustand';

interface User {
    username: string;
    password: string;
    role?: string
}

interface UserStore {
    user: User | null;
    login: (LoginUser: User) => void;
    logout: () => void;
}

export const useStore = create<UserStore>((set) => ({
    user: null,
    login: (LoginUser) => set({ user: LoginUser }),
    logout: () => set({ user: null }),
}));