import { configureStore } from '@reduxjs/toolkit';
import participantSlice from './slices/participantSlice';

export const store = configureStore({
  reducer: {
    participant: participantSlice,
  },
});
