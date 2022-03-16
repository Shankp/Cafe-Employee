import { createStore } from 'redux';
import { CafeState } from '../Components/Common/CommonUtils'


//const combineReducer = createStore.combineReducers;

const CafeAddAndOverviewReducer = (state = CafeState.CafeOverview, action) => {
    console.log('CafeAddAndOverviewReducer reducer called');
    switch (action.type) {
        case CafeState.CafeOverview:
            console.log("state1" + state)
            state = CafeState.CafeOverview
            return state;
        case CafeState.AddCafe:
            console.log("state2" + state)
            state = CafeState.AddCafe
            return state;

        // case '':
        //     break;
        default:
            return state;
    }
};


// const rootReducer = combineReducer({
//     cafeId: CafeIdReducer,
//     CafeAddOrOverview: CafeAddAndOverviewReducer
// })
const cafeStore = createStore(CafeAddAndOverviewReducer);



cafeStore.subscribe(() => {
    console.log('current state', cafeStore.getState());
})
export default cafeStore;
