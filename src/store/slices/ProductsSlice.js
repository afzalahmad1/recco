import { createSlice } from "@reduxjs/toolkit";
import data from "../../data.json";
const productsSlice = createSlice({
  name: "products",
  initialState: [...data],
  reducers: {
    addProduct(state, action) {
      // console.log("State", state, "action", action.payload);
      state.push(action.payload)
    },
    updateStatus(state, action) {
        console.log("redux",action.payload,"state",action.payload.status);
        state[action.payload.id].status = action.payload.status;
    },
  },
});

// console.log(productsSlice.actions);
export default productsSlice.reducer;
export const { updateStatus , addProduct} = productsSlice.actions; 
