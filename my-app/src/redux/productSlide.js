import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  productList: [],
  cartItem: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // ✅ Set product data
    setDataProduct: (state, action) => {
      state.productList = [...action.payload];
    },

    // ✅ Add item to cart
    addCartItem: (state, action) => {
      const existingItem = state.cartItem.find(
        (item) => item._id === action.payload._id
      );

      if (existingItem) {
        toast("Item already in cart");
      } else {
        toast("Item added successfully");
        const total = action.payload.price;
        state.cartItem.push({ ...action.payload, qty: 1, total });
      }
    },

    // ✅ Delete item from cart (fixed)
    deleteCartItem: (state, action) => {
      const prevLength = state.cartItem.length;

      // Use filter instead of splice to avoid index issues
      state.cartItem = state.cartItem.filter(
        (item) => item._id !== action.payload
      );

      // Only show toast if an item was actually deleted
      if (state.cartItem.length < prevLength) {
        toast("Item removed from cart");
      } else {
        toast.error("Item not found");
      }
    },

    // ✅ Increase quantity
    increaseQty: (state, action) => {
      const item = state.cartItem.find((el) => el._id === action.payload);
      if (item) {
        item.qty += 1;
        item.total = item.price * item.qty;
      }
    },

    // ✅ Decrease quantity (fixed logic)
    decreaseQty: (state, action) => {
      const item = state.cartItem.find((el) => el._id === action.payload);

      if (item) {
        if (item.qty > 1) {
          item.qty -= 1;  // Correct decrease logic
          item.total = item.price * item.qty;
        } else {
          toast("Cannot reduce quantity below 1");
        }
      }
    }
  }
});

export const {
  setDataProduct,
  addCartItem,
  deleteCartItem,
  increaseQty,
  decreaseQty
} = productSlice.actions;

export default productSlice.reducer;
