import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./features/playerSlice";
import { shazamApi } from "./services/shazam";

export const store = configureStore({
  reducer: {
    player: playerReducer,
    [shazamApi.reducerPath]: shazamApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamApi.middleware),
});
