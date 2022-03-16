import { configureStore } from '@reduxjs/toolkit'
import cafeStateReducer from './../Components/cafe/CafeStateSlice'
import employeeStateReducer from './../Components/Employee/EmployeeSlice'


export default configureStore({
  reducer: {
    cafe: cafeStateReducer,
    employee: employeeStateReducer
  },
})