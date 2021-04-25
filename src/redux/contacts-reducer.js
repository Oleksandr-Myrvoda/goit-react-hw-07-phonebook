import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

// import { ADD_CONTACTS, DELETE_CONTACTS, FILTER_CONTACTS } from "./constants";
// import { addContact, deleteContactAction, filterContact } from "./actions";
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  toggleContactRequest,
  toggleContactSuccess,
  toggleContactError,
  filterContact,
} from "./contacts-actions";

const initialState = {
  // contacts: JSON.parse(localStorage.getItem("contacts")) || [],
  contacts: [],
};

const items = createReducer(initialState.contacts, {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => {
    const updateContacts = [...state, payload];
    // localStorage.setItem("contacts", JSON.stringify(updateContacts));
    return updateContacts;
  },

  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
  [toggleContactSuccess]: (state, { payload }) =>
    state.map((contact) => (contact.id === payload.id ? payload : contact)),
});

const filter = createReducer("", {
  [filterContact]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [toggleContactRequest]: () => true,
  [toggleContactSuccess]: () => false,
  [toggleContactError]: () => false,
});

const error = createReducer(null, {});

const contactsReducer = combineReducers({
  items,
  filter,
  loading,
  error,
});
export default contactsReducer;

// ========= REDUX ==========

// const contactsItems = (
//   state = [
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//   ],
//   { type, payload }
// ) => {
//   switch (type) {
//     case ADD_CONTACTS:
//       return [...state, payload];
//     case DELETE_CONTACTS:
//       return state.filter((contact) => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const filterContact = (state = "", { type, payload }) => {
//   switch (type) {
//     case FILTER_CONTACTS:
//       return payload;
//     default:
//       return state;
//   }
// };

// const contactsReducer = combineReducers({
//   items: contactsItems,
//   filter: filterContact,
// });

// export default contactsReducer;
