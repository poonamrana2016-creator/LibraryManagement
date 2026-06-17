import axios from "axios";
import getConfig from "../common/getConfig";

export const signUpApi = createAsyncThunk("auth/signUpApi", async (values, thunkApi) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_URL_API}/auth/sign-up`, values, getConfig() );
    } catch (error) {
        return thunkApi.rejecWithValue(error);
    }
});