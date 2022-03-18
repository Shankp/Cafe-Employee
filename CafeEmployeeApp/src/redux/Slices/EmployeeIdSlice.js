import { createSlice } from "@reduxjs/toolkit";

export const EmployeeIdStateSlice = createSlice({
    name: 'employeeId',
    initialState: {
        value: 0,
    },
    reducers: {
        GetExployeeId: (state, action) => {
            state.value = action.payload
        },

    },
})

export const { GetExployeeId } = EmployeeIdStateSlice.actions

export default EmployeeIdStateSlice.reducer