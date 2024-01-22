import { create } from "zustand";

type LoginType = {
  login: boolean;
  logging: () => void;
};

type RegisterType = {
  register: boolean;
  registering: () => void;
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
