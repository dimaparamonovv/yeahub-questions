import { configureStore } from "@reduxjs/toolkit";

import { questionsApi } from "../entities/question/model/questionsApi";
import { filterApi } from "@/features/filter/model/filterApi";

export const store = configureStore({
  reducer: {
    [questionsApi.reducerPath]: questionsApi.reducer,
    [filterApi.reducerPath]: filterApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(questionsApi.middleware)
      .concat(filterApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
