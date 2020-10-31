import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const addContact = createAction("phonebook/add", ({ name, number }) => ({
  payload: {
    contact: {
      id: uuidv4(),
      name,
      number,
    },
  },
}));

export const removeContact = createAction("phonebook/remove");

export const changeFilter = createAction("phonebook/filter");
