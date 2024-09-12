import { createSlice } from "@reduxjs/toolkit";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: initialContacts, // Початковий стан
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload]; // Додавання контакту
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      ); // Видалення контакту
    },
  },
});

// Експортуємо екшени
export const { addContact, deleteContact } = contactsSlice.actions;

// Селектор для отримання контактів
export const selectContacts = (state) => state.contacts.contacts;

// Експортуємо редюсер
export default contactsSlice.reducer;
