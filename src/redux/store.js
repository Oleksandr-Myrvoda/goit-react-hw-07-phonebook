import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import contactsReducer from "./contacts-reducer";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

// const contactsPersistConfig = {
//   key: "contacts",
//   storage,
//    whitelist: ["items"],
// };

const store = configureStore({
  // reducer: { contacts: persistReducer(contactsPersistConfig, contactsReducer) },
  reducer: { contacts: contactsReducer },
  middleware,
});
const persistor = persistStore(store);

export { store, persistor };
