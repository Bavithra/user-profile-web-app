import { createSlice } from '@reduxjs/toolkit';

export const DataSlice = createSlice({
  name: 'dataSlice',
  initialState: {
    user: {
      name: '',
      email: '',
      age: '',
      'profile-image': '',
      'work-experience': [],
    }
  },
  reducers: {
    saveUser: (state, param) => {
      const { payload } = param;
      state.user = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveUser } = DataSlice.actions;

export default DataSlice.reducer;
