import React, { Component } from "react";
import ContactForm from "./Components/ContactForm";
import Filter from "./Components/Filter";
import ContactList from "./Components/ContactList";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="mainBox">
        <section title="Phonebook" className="section">
          <h1>Phonebook</h1>
          <ContactForm />
        </section>

        <section title="Contacts" className="section">
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </section>
      </div>
    );
  }
}

export default App;
