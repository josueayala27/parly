import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  participants: [],
};

export const participantSlice = createSlice({
  name: 'participant',
  initialState,
  reducers: {
    setParticipants: (state, { payload }) => {
      state.participants = payload;
    },
  },
});

export const { setParticipants } = participantSlice.actions;

export default participantSlice.reducer;
