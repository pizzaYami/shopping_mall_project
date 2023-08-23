import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    increace(state, a) {
      state.age += a.payload;
    },
  },
});

export let { increace } = user.actions;

let cart = createSlice({
  name: "cart", // 변수명과 동일하게 ?
  initialState: [
    // 내용이 들어감
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
