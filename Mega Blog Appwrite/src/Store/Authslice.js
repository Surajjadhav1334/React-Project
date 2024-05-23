import { createSlice } from "@reduxjs/toolkit";
// import { Flag } from "appwrite";

const initialState = {
    status : false,
    userdata : null
}

const authslice = createSlice({
    name : "auth",
    initialState,
    reducers: {
        login : (state, action) => {
            state.status = true;
            state.userdata = action.payload.userdata 
        },
        logout : (state) => {
            state.status  = false;
            state.userdata = null;
        }
    } 

})
export const {login, logout} =authslice.actions;

export default authslice.reducer;