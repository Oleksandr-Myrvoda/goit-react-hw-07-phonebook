import axios from "axios";
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
} from "./contacts-actions";

axios.defaults.baseURL = "http://localhost:4040";

const fetchContact = () => async (dispatch) => {
  dispatch(fetchContactRequest());

  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

const addContact = (user) => async (dispatch) => {
  dispatch(addContactRequest());

  try {
    const { data } = await axios.post("/contacts", user);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

const deleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);

    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

const toggleContact = ({ id, completed }) => async (dispatch) => {
  const update = { completed };
  dispatch(toggleContactRequest());

  try {
    const { data } = await axios.update(`/contacts/${id}`, update);
    dispatch(toggleContactSuccess(data));
  } catch (error) {
    dispatch(toggleContactError(error));
  }
};

export default { addContact, deleteContact, toggleContact, fetchContact };
