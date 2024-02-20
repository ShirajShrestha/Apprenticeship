import { create } from "zustand";

type LoginType = {
  login: boolean;
  logging: () => void;
};

type RegisterType = {
  register: boolean;
  registering: () => void;
};

// type for toast
type ToastMessage = {
  message: string;
  type: "SUCCESS" | "ERROR";
};

type AppState = {
  toast: ToastMessage | undefined;
  isLoggedIn: boolean;
  setToast: (toastMessage: ToastMessage | undefined) => void;
};

export const useLogIn = create<LoginType>((set) => ({
  login: false,
  logging: () => {
    set((state) => ({ login: !state }));
  },
}));

export const useRegister = create<RegisterType>((set) => ({
  register: false,
  registering: () => {
    set((state) => ({ register: !state }));
  },
}));

// for toast

export const useToast = create<AppState>((set) => ({
  toast: undefined,
  isLoggedIn: false,
  setToast: (toastMessage) => set({ toast: toastMessage }),
}));
