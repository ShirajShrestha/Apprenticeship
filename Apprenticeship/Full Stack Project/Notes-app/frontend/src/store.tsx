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
// type ToastMessage = {
//   message: string;
//   type: "SUCCESS" | "ERROR";
// };

// type AppState = {
//   toast: ToastMessage | undefined;
//   isLoggedIn: boolean;
//   setToast: (toastMessage: ToastMessage | undefined) => void;
// };

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

// export const useToast = create<AppState>((set) => ({
//   toast: undefined,
//   isLoggedIn: false,
//   setToast: (toastMessage) => set({ toast: toastMessage }),
// }));

// For editing note
export interface EditedNoteData {
  id: number;
  title: string;
  description: string;
  image: File | string;
}
interface NoteStore {
  noteData: EditedNoteData | null;
  setNoteData: (data: EditedNoteData | null) => void;
  updateNoteTitle: (title: string) => void;
  updateNoteDescription: (description: string) => void;
  updateNoteImage: (image: string | File) => void;
}

export const useNoteStore = create<NoteStore>((set) => ({
  noteData: null,
  setNoteData: (data: EditedNoteData | null) => set({ noteData: data }),
  updateNoteTitle: (title) =>
    set((state) => ({
      noteData: state.noteData ? { ...state.noteData, title: title } : null,
    })),
  updateNoteDescription: (description) =>
    set((state) => ({
      noteData: state.noteData
        ? { ...state.noteData, description: description }
        : null,
    })),
  updateNoteImage: (image) =>
    set((state) => ({
      noteData: state.noteData ? { ...state.noteData, image: image } : null,
    })),
}));
