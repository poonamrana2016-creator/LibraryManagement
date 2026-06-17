import axios from "axios";
import getConfig from "../common/getConfig";


export const loginApi = createAsyncThunk("auth/loginApi", async(values, thunkApi ) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_URL_API}/auth/sign-in`, values, getConfig() );
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
} )