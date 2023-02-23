import {createSlice} from '@reduxjs/toolkit';

const InitialCartstate = {
  item: [],
};
const CartSlice = createSlice({
  name: 'CartSlice',
  initialState: InitialCartstate,
  reducers: {
    AddtoCart: (state, action) => {
      const newitem = action.payload;
      const a = state.item.filter(i => {
        return i.id === newitem.id;
      });
      console.log('a', a);
      if (a.length != 0) {
        a[0].quantity++;
      } else {
        state.item.push({...newitem, quantity: 1});
      }
    },
    RemovetoCart: (state, action) => {
      const id = action.payload;
      const b = state.item.find(itm => itm.id === id);
      console.log('b', b);
      if (b)
        if (b?.quantity === 1) {
          state.item = state.item.filter(itm => itm.id !== id);
        } else {
          b.quantity--;
        }
    },
  },
});
export const cartactions = CartSlice.actions;
export default CartSlice.reducer;
