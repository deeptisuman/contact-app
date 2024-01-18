import React from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddConatct";
import ContactList from "./ContactList";


function App() {
  const contacts = [
    {
      id: "1",
      name: "Deepti",
      email: "deeps@gmail.com",
    },
    {
      id: "2",
      name: "Shashank",
      email: "Shanky@gmail.com",
    },
  ];
  return (
    <div className="ui container">
    <Header />
    <AddContact />
    <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
