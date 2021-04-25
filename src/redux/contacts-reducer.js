import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

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
  contacts: [],
};

const items = createReducer(initialState.contacts, {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => {
    const updateContacts = [...state, payload];
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
