import { createSlice } from "@reduxjs/toolkit";

export const UpdateCafeListSlice = createSlice({
    name: 'CafeList',
    initialState: {
        value: 0,
    },
    reducers: {
        GetCafeListByState: (state, action) => {
            state.value = action.payload
        }
    },
})

export const { GetCafeListByState } = UpdateCafeListSlice.actions

export default UpdateCafeListSlice.reducer