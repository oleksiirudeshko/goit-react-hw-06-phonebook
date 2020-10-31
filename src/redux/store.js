import { configureStore } from "@reduxjs/toolkit";

import phoneReducer from "./phoneReducer";

const store = configureStore({
  reducer: { contacts: phoneReducer },
});

export default store;
