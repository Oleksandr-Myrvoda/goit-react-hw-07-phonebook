import { createAction } from "@reduxjs/toolkit";
// ==========================
import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_ERROR,
  ADD_CONTACTS_REQUEST,
  ADD_CONTACTS_SUCCESS,
  ADD_CONTACTS_ERROR,
  DELETE_CONTACTS_REQUEST,
  DELETE_CONTACTS_SUCCESS,
  DELETE_CONTACTS_ERROR,
  TOGGLE_CONTACTS_REQUEST,
  TOGGLE_CONTACTS_SUCCESS,
  TOGGLE_CONTACTS_ERROR,
  FILTER_CONTACTS,
} from "./contacts-constants";

const fetchContactRequest = createAction(FETCH_CONTACTS_REQUEST);
const fetchContactSuccess = createAction(FETCH_CONTACTS_SUCCESS);
const fetchContactError = createAction(FETCH_CONTACTS_ERROR);

const addContactRequest = createAction(ADD_CONTACTS_REQUEST);
const addContactSuccess = createAction(ADD_CONTACTS_SUCCESS);
const addContactError = createAction(ADD_CONTACTS_ERROR);

const deleteContactRequest = createAction(DELETE_CONTACTS_REQUEST);
const deleteContactSuccess = createAction(DELETE_CONTACTS_SUCCESS);
const deleteContactError = createAction(DELETE_CONTACTS_ERROR);

const toggleContactRequest = createAction(TOGGLE_CONTACTS_REQUEST);
const toggleContactSuccess = createAction(TOGGLE_CONTACTS_SUCCESS);
const toggleContactError = createAction(TOGGLE_CONTACTS_ERROR);

const filterContact = createAction(FILTER_CONTACTS);

export {
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
};
//========== TOOLKIT ========

// const addContact = createAction(ADD_CONTACTS);
// const deleteContactAction = createAction(DELETE_CONTACTS);
// const filterContact = createAction(FILTER_CONTACTS);

// ========= REDUX ==========

// const addContact = ({ name, number }) => ({
//   type: ADD_CONTACTS,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// const deleteContactAction = (id) => ({
//   type: DELETE_CONTACTS,
//   payload: id,
// });

// const filterContact = (value) => ({
//   type: FILTER_CONTACTS,
//   payload: value,
// });

// export { addContact, deleteContactAction, filterContact };
