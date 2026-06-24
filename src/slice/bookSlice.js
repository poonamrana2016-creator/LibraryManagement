import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../services/common/getConfig";
import { act } from "react";

// api connecting using react-redux tool

// api to fetch all the existing book from database
export const getAllBookApi = createAsyncThunk(
    "book/getAllBookApi", async (_, thunkAPI) => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/book/get-all-book`, getConfig());
            if (data.status === 200) {
                return thunkAPI.fulfillWithValue(data);

            } else {
                return thunkAPI.rejectWithValue("Api is not working currently");
            }
        } catch (error) {
            return thunkAPI.rejectWithValue("Api is not working, tyr again", error.message);
        }
    });


// api to add a new book
export const addNewBookApi = createAsyncThunk(
    "book/addNewBookApi", async (value, thunkAPI) => {
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/book/add-new-book`, value, getConfig());
            if (data.status === 201) {
                return thunkAPI.fulfillWithValue(data);
            }
        } catch (error) {
            return thunkAPI.rejectWithValue("Api not working, try again", error.message);
        }
    })

// store configuration
const bookSlice = createSlice({

    name: 'book',
    initialState: {
        loading: false,
        book: null,
        books: [],
        message: null,
        token: null,
        statusCode: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            // to add a book
            .addCase(addNewBookApi.pending, (state) => {
                state.loading = true;
            })
            .addCase(addNewBookApi.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action);
                state.book = action.payload.addedbook;
                state.books = [
                    ...state.books,
                    action.payload.addedbook
                ];
                state.message = action.payload.message;
                state.statusCode = action.payload.status;
            })
            .addCase(addNewBookApi.rejected, (state, action) => {
                state.loading = true;
                state.error = action.payload.message;
                state.statusCode = action.payload.status;
            })


            // to fetch all the books in list
            .addCase(getAllBookApi.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllBookApi.fulfilled, (state, action) => {
                state.loading = false;
                // state.book = action.payload.book;
                state.books = action.payload.booklist;
                state.message = action.payload.message;
                state.statusCode = action.payload.status;
            })
            .addCase(getAllBookApi.rejected, (state, action) => {
                state.loading = true;
                state.error = action.payload.error || action.payload.message;
                state.statusCode = action.payload.status;
            })
    }

});
export default bookSlice.reducer;
