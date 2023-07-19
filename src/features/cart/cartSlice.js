// NOTE: We should always derive state
// to receive or obtain from a source
import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  cart: [],

  /*
    Shaped data
    {
        pizzaId: 12,
        name: 'Mediterranean',
        quantity: 2,
        unitPrice: 16,
        totalPrice: 32
    }
    */
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload = pizzaId
      //  STEP 1: get the current item
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      // STEP 2: increase the quantity
      item.quantity++;

      //STEP 3: update the total price
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuentity(state, action) {
      // payload = pizzaId
      //  STEP 1: get the current item
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      // STEP 2: decrease the quantity
      item.quantity--;

      //STEP 3: update the total price
      item.totalPrice = item.quantity * item.unitPrice;

      //STEP 4: validation
      // NOTE: We can use an action creater inside another one
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuentity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

/*
NOTE: 
Operations done to the state should be place here in the slice file
the standar is to start with (get)
*/

// SELECTOR FUNCTIONS

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

//   This is to check if there is the item in the cart
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
// if there is a quantity
// then return quantity
// else return 0

/*

NOTE:
having this selector functions might cause performance issues
 use this library
reselect
*/
