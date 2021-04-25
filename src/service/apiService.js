import axios from "axios";

axios.defaults.baseURL = "http://localhost:4040";

const fetchContacts = () => {
  return axios.get("/contacts").then((response) => response.data);
};
const addContacts = (contact) => {
  return axios.post("/contacts", contact).then(({ data }) => data);
};
const deleteContacts = (contactId) => {
  return axios.delete(`/contacts/${contactId}`);
};
const updateContacts = (contactId, update) => {
  return axios.update(`/contacts/${contactId}`, update).then(({ data }) => data);
};
