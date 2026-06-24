import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getConfig from "../services/common/getConfig";
import axios from "axios";
import { act } from "react";


// to add a new student
export const addStudentApi = createAsyncThunk(
    "student/addStudentApi", async (value, thunkApi) => {
        try {

            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/student/add-new-student`, value, getConfig());
            if (data.status === 201) {
                return thunkApi.fulfillWithValue(data);
            } else {
                localStorage.setItem("authToken", data.token);
                return thunkApi.rejectWithValue("Api not working currently");
            }

        } catch (error) {
            return thunkApi.rejectWithValue("Api not working", error.message);
        }
    }
);

//  to get AllStudent Updated latestly 
export const allStudentApi = createAsyncThunk(
    "student/allStudentApi", async (_, thunkAPI) => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/student/all-students`, getConfig());
            console.log(data);
            if (data.status === 200) {
                localStorage.setItem("authToken", data.token);
                return thunkAPI.fulfillWithValue(data);
            }
        } catch (error) {
            return thunkAPI.rejectWithValue("Api not working", error.message);
        }
    });



// Store Configuration
const studentSlice = createSlice({
    name: 'student',
    initialState: {
        loading: false,
        message: null,
        students: [],
        student: null,
        token: null,
        statusCode: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            // api to add a new student
            .addCase(addStudentApi.pending, (state) => {
                state.loading = true;
            })
            .addCase(addStudentApi.fulfilled, (state, action) => {
                state.loading = false;
                state.student = action.payload.newStudent;
                // all updated students state here
                state.students = action.payload.allStudents;
                state.message = action.payload.message;
                state.statusCode = action.payload.status;
            })
            .addCase(addStudentApi.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
                state.statusCode = action.payload.status;
            })


            // api to fetch all the existing as well as newly added student from database
            .addCase(allStudentApi.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(allStudentApi.fulfilled, (state, action) => {
                state.loading = false;
                state.students = action.payload.allStudents;
                state.message = action.payload.message;
                state.statusCode = action.payload.status;
            })
            .addCase(allStudentApi.rejected, (state, action) => {
                state.loading = true;
                state.error = action.payload.error || action.payload.message;
                state.statusCode = action.payload.status;
            })
    }

});

export default studentSlice.reducer;