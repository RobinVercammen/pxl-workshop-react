import { createStore } from 'redux';

import LayoutReducer from '../layout.reducer';

const store = createStore(LayoutReducer);
export default store;
