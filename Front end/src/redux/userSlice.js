import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    email : "",
    firstName : "",
    lastName : "",
    _id : "",
};

export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        loginRedux : (state,action)=>{
            console.log("Payload:",action.payload);
           // state.user = action.payload.data
            state._id = action.payload?.data?._id || "";
            state.firstName = action.payload?.data?.firstName || "";
            state.lastName = action.payload?.data?.lastName || "";
            state.email = action.payload?.data?.email || "";
        },
        logoutRedux : (state,action)=>{
            console.log("Logout triggered");
            state._id =  "";
            state.firstName =  "";
            state.lastName =  "";
            state.email =  "";
        }
    }
})

export const {loginRedux , logoutRedux } = userSlice.actions

export default userSlice.reducer