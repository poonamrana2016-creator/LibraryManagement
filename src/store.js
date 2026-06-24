import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./slice/studentSlice";
import authSlice from "./slice/authSlice";
import bookSlice from "./slice/bookSlice";

const store = configureStore({
    reducer: {
        authStore: authSlice,
        studentStore : studentSlice,
        bookStore: bookSlice,

    }
});
export default store;