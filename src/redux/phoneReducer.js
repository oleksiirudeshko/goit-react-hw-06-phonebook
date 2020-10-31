import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import { addContact, removeContact, changeFilter } from "./phohebookActions";

const onAddContact = (state, action) => {
  const newContact = action.payload.contact;
  const NotUnicName = state.find((contact) => contact.name === newContact.name);
  if (NotUnicName) {
    alert(`${newContact.name} alredy exist!`);
  } else {
    return [...state, newContact];
  }
};

const onRemoveContact = (state, action) =>
  state.filter((contact) => contact.id !== action.payload);

const items = createReducer([], {
  [addContact]: onAddContact,
  [removeContact]: onRemoveContact,
});

const filter = createReducer("", {
  [changeFilter]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
