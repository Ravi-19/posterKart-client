import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from './../../utils/axiosClient';

export const catagoryData = createAsyncThunk("catagoryData" , async()=> {
    try {
        const catagoryResponse = await axiosClient.get('/catagories?populate=image') ; 
       // console.log(catagoryResponse) ; 
        return  catagoryResponse.data.data ; 
    } catch (err) {
        console.log(err) ; 
        return Promise.reject(err) ; 
    }
} )

const catagorySlice = createSlice({
    name:"catagorySlice" ,
    initialState : {
        catagories:null  
    } 
    ,
    extraReducers:(builder) => {
        builder.addCase(catagoryData.fulfilled ,  (state , action)=> {
            state.catagories = action.payload ; 
        }) 
    }
})


export default catagorySlice.reducer ; 