import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,  // Use camelCase for consistency
    isAuth: false,  // Track authentication status
    error: null, 
    msg :null, // Track any errors
};

export const userSlice = createSlice({
    name: "user",  // Name of the slice
    initialState,
    reducers: {
        
    }
});

export default userSlice.reducer;  // Export the reducer function

export const { } = userSlice.actions;  // Export actions
