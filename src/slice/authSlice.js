import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "react-router-dom";
import getConfig from "../services/common/getConfig";


// API SECTION

export const registerationAPI = createAsyncThunk(
    "auth/registerationAPI", async (value, thunkAPI) => {
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/sign-up`, value, getConfig());
            console.log(data)
            if (data.status === 201) {
                return thunkAPI.fulfillWithValue(data);
                // localStorage.setItem("authToken", data.token);

            }
            else {
                return thunkAPI.rejectWithValue("API is not wokring..");
            }
        } catch (error) {
            return thunkAPI.rejectWithValue("API is not working..", error.message);
        }
    }
);

// for LogIn API
export const loginApi = createAsyncThunk(
    "auth/loginAPI", async (value, thunkAPI) => {
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/sign-in`, value, getConfig());
            if (data.status === 200) {
                return thunkAPI.fulfillWithValue(data);
                localStorage.setItem("authToken", data.token);
            } else {
                return thunkAPI.rejectWithValue("API is not working");
            }
        } catch (error) {
            return thunkAPI.rejectWithValue("cannot login please try again", error.message);
        }
    }
);


// STORE CONFIGURATION

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        user: null,
        message: null,
        token: null,
        statusCode: null,
        error: null,

    },
    reducer: {},
    extraReducers: (builder) => {
        builder

            // Slice for user Sign-up / new Registeration
            .addCase(registerationAPI.pending, (state) => {
                state.loading = true;
            })
            .addCase(registerationAPI.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action)
                state.user = action.payload.user;
                state.message = action.payload.message;
                // here state.token will not require as token is required only in log in time
                state.statusCode = action.payload.status;
            })
            .addCase(registerationAPI.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
                state.statusCode = action.payload.status;
            })

            // SLice for user Sign-in / Login
            .addCase(loginApi.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginApi.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.message = action.payload.message;
                state.token = action.payload.token;
                // state.token will be mentioned only in log-in api
                state.statusCode = action.payload.status;
            })
            .addCase(loginApi.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
                state.statusCode = action.payload.status;
            })
    }
});

export default authSlice.reducer;