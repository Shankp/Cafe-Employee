import { createSlice } from "@reduxjs/toolkit";

export const EmployeeStateSlice = createSlice({
    name: 'employee',
    initialState: {
        value: 0,
    },
    reducers: {
        GetExployeeId: (state, action) => {
            state.value = action.payload
        },

    },
})

export const { GetExployeeId } = EmployeeStateSlice.actions

export default EmployeeStateSlice.reducer