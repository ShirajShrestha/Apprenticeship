import axios from "axios";
// import { NoteType } from "../../backend/shared/types";
import { NoteFormData } from "./components/AddNote";
import { LoginFormData } from "./forms/Login/Login";
import { RegisterFormData } from "./forms/Register/Register";
import { Note } from "./components/NoteList";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const fetchCurrentUser = async () => {
  const response = await fetch(`${API_BASE_URL}/users/me`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Error fetching user");
  }
  return response.json();
};

export const register = async (formData: RegisterFormData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/register`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const responseBody = await response.json();

    if (!response.ok) {
      throw new Error(responseBody.message);
    }

    return responseBody; // Return response body if successful
  } catch (error) {
    console.error("Error registering user:", error);
    throw error; // Rethrow error for handling in caller
  }
};

//endpoint for login
export const logIn = async (formData: LoginFormData) => {
  const response = await fetch(`${API_BASE_URL}/users/login`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  const body = await response.json();
  if (!response.ok) {
    throw new Error(body.message);
  }
  return body;
};

// token to validate logged in user
export const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}/users/validate-token`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Token invalid");
  }
  return response.json();
};

// endpoint for logout
export const logOut = async () => {
  const response = await fetch(`${API_BASE_URL}/auth/logout`, {
    credentials: "include",
    method: "POST",
  });
  if (!response.ok) {
    throw new Error("Error Logging Out");
  }
};

// endpoint to add note
export const addNewNote = async (formDataToSend: NoteFormData) => {
  const response = await fetch(`${API_BASE_URL}/notes/postNote/`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formDataToSend),
  });
  if (!response.ok) {
    throw new Error("Failed to add note");
  }
  const responseData = await response.json();
  return responseData;
};

export const fetchNotes = async () => {
  try {
    const response = await axios.get<Note[]>(`${API_BASE_URL}/notes/getNotes`);
    return response.data;
  } catch (error) {
    console.error("Error fetching notes:", error);
  }
};

export const deleteNote = async (id: number) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/notes/${id}`);
    if (response.status != 200) {
      throw new Error("Failed to delete note");
    }
  } catch (error) {
    console.log("Error deleting note", error);
  }
};
