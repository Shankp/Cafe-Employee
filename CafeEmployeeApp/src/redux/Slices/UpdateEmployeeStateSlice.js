import { createSlice } from "@reduxjs/toolkit";

export const UpdateCafeListSlice = createSlice({
    name: 'empoyeeList',
    initialState: {
        value: 0,
    },
    reducers: {
        GetEmployeeCountByState: (state, action) => {
            state.value = action.payload
        }
    },
})

export const { GetEmployeeCountByState } = UpdateCafeListSlice.actions

export default UpdateCafeListSlice.reducer