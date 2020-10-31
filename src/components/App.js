import React from "react";

import Section from "./Section";
import ContactList from "./ContactList";
import ContactEditor from "./ContactEditor";
import Filter from "./Filter";

export default function App() {
  return (
    <Section>
      <ContactEditor />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Section>
  );
}
