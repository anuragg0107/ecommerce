import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import productsReducer from '../features/product list/ProductListSlice';

export const store = configureStore({
  reducer: {
    product: productsReducer,
  },
});
