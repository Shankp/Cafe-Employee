import { createSlice } from "@reduxjs/toolkit";
import { CafeState } from '../../Components/Common/CommonUtils'

export const cafeStateSlice = createSlice({
    name: 'cafe',
    initialState: {
        value: CafeState.CafeOverview,
    },
    reducers: {
        GetCafeOverView: (state) => {
            state.value = CafeState.CafeOverview
        },
        GetCafeAddView: (state) => {
            state.value = CafeState.AddCafe
        },
    },
})

export const { GetCafeOverView, GetCafeAddView } = cafeStateSlice.actions

export default cafeStateSlice.reducer