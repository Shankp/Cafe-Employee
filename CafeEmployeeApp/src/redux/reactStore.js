import { configureStore } from '@reduxjs/toolkit'
import cafeStateReducer from './../Components/cafe/CafeStateSlice'
import employeeIdStateReducer from './../Components/Employee/EmployeeIdSlice'
import employeeStateReducer from './../Components/Employee/EmployeeStateSlice'


export default configureStore({
  reducer: {
    cafe: cafeStateReducer,
    employeeViewState: employeeStateReducer,
    employeeId: employeeIdStateReducer
  },
})