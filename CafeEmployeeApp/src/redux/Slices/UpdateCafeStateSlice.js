import { createSlice } from "@reduxjs/toolkit";

export const UpdateCafeListSlice = createSlice({
    name: 'CafeList',
    initialState: {
        value: 0,
    },
    reducers: {
        GetCafeListCountByState: (state, action) => {
            state.value = action.payload
        }
    },
})

export const { GetCafeListCountByState } = UpdateCafeListSlice.actions

export default UpdateCafeListSlice.reducer