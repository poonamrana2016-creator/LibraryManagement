import { loginApi } from "../services/api/auth-api";
import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        user: false,
        message: false,
        token: false,
        statusCode: null,
        error: null,

    },
    reducer: {},
    extraReducers: (builder) => {
        builder

        // Slice for user Sign-in
            .addcase(loginApi.pending, (state) => {
                state.loading = true;
            })
            .addcase(loginApi.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.message = action.payload.message;
                state.statusCode = action.payload.status;
            })
            .addcase(loginApi.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
                state.statusCode = action.payload.status;
            })

            // SLice for user Sign-up/Registration

            // .addcase
    }
});

export default authSlice.reducer;