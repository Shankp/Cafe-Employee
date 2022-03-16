import { createStore } from 'redux';


const CafeIdReducer = (state = 0, action) => {
    console.log('reducer called');
    switch (action.type) {
        case 'empId':
            return action.payload;
        // case '':
        //     break;
        default:
            return state;
    }
};

const store = createStore(CafeIdReducer);

store.subscribe(() => {
    console.log('current state', store.getState());
});

export default store;
