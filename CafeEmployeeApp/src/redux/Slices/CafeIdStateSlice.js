import { createSlice } from "@reduxjs/toolkit";

export const CafeIdStateSlice = createSlice({
    name: 'cafeId',
    initialState: {
        cafeID: 0

    },
    reducers: {
        GetCafeId: (state, action) => {
            state.value = action.payload
        },

    },
})

export const { GetCafeId } = CafeIdStateSlice.actions

export default CafeIdStateSlice.reducer