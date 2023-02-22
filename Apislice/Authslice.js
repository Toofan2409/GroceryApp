import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {Apidata} from './Apislice';
import {createSlice} from '@reduxjs/toolkit';

const Initialstate = {user: {}};
const Authslice = createSlice({
  name: 'authenticate',
  initialState: Initialstate,
  reducers: {
    // Signin(state) {
    //   state.isAunthenticated = !state.isAunthenticated;
    // },
    SignOut(state) {
      state.user = {};
    },
    SignUp(state, action) {
      state.user = action.payload;
    },
  },
});

const reducer = combineReducers({
  [Apidata.reducerPath]: Apidata.reducer,
  Authslice,
});

const Store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(Apidata.middleware),
});
export const authactions = Authslice.actions;

export default Store;
