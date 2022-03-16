import { createSlice } from "@reduxjs/toolkit";
import { EmployeeState } from '../Common/CommonUtils'

export const EmployeeStateSlice = createSlice({
    name: 'employeeViewState',
    initialState: {
        value: EmployeeState.EmployeeList,
    },
    reducers: {
        GetEmployeeList: (state) => {
            state.value = EmployeeState.EmployeeList
        },
        GetEmployeeAddView: (state) => {
            state.value = EmployeeState.AddEmployee
        },
    },
})

export const { GetEmployeeList, GetEmployeeAddView } = EmployeeStateSlice.actions

export default EmployeeStateSlice.reducer