const initialState = {
    title: 'Dashboard'
};

const layoutreducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TITLE':
            const newState = { ...state, ...{ title: action.payload } };
            return newState;
        default:
            return state;
    }
}

export default layoutreducer;