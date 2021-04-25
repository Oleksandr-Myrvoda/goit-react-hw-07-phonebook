import React from "react";
import styles from "./ContactList.module.css";
import { connect } from "react-redux";
// import { ADD_CONTACTS, DELETE_CONTACTS, FILTER_CONTACTS } from "../../redux/constants";
// import { deleteContactAction } from "../../redux/actions";
import { contactsOperations, contactsSelectors } from "../../redux";

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {console.log(contacts)};
    {contacts.map(({ name, number, id }) => (
      <li key={id} className={styles.item}>
        {/* <Contact
          text={text}
          completed={completed}
          onToggle={() => onToggle({ id, completed: !completed })}
          onDelete={() => onDelete(id)}
        /> */}
        <p>
          {name}: {number}
        </p>
        <button
          type="button"
          className={styles.button}
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

const mapStateToProps = (state) => {
  console.log(contactsSelectors.getFilter(state));
  return {
    contacts: contactsSelectors.getVisibleContacts(state),
    // contacts: contactsSelectors.getFilter(state),
  };
};
const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(contactsOperations.deleteContact(id)),
  // toggleContact: (id) => dispatch(contactsOperations.toggleContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
