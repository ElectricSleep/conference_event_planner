import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice.jsx';
import avReducer from './avSlice.jsx';
import mealsReducer from './mealsSlice.jsx';

export default configureStore({
  reducer: {
    venue: venueReducer,
    av: avReducer,
    meals: mealsReducer,
  },
});
