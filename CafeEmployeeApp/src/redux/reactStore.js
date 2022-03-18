import { configureStore } from '@reduxjs/toolkit'
import cafeStateReducer from './Slices/CafeStateSlice'
import employeeIdStateReducer from './Slices/EmployeeIdSlice'
import employeeStateReducer from './Slices/EmployeeStateSlice'
import CafeIdStateReducer from './Slices/CafeIdStateSlice'
import UpdateStateSlice from './Slices/UpdateStateSlice'


export default configureStore({
  reducer: {
    cafe: cafeStateReducer,
    employeeViewState: employeeStateReducer,
    employeeId: employeeIdStateReducer,
    cafeId: CafeIdStateReducer,
    CafeList: UpdateStateSlice
  },
})