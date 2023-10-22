import React, {useState} from "react";
import "./App.css";
import { PhoneBookForm } from "./components/PhoneBookForm/PhoneBookForm";
import { InformationTable } from "./components/InformationTable/InformationTable";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
  }
  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addContact}/>
      <InformationTable contacts={contacts}/>
    </section>
  );
}

export default App;
