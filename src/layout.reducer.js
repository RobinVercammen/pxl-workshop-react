const initialState = {
    title: 'Dashboard',
    calorieEntries: [],
};

const layoutreducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TITLE':
            return { ...state, ...{ title: action.payload } };
        case 'SET_CALORIEENTRIES':
            return { ...state, ...{ calorieEntries: action.payload } };
        default:
            return state;
    }
}

export default layoutreducer;