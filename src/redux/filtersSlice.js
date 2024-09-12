import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload; // Оновлюємо значення фільтра
    },
  },
});

// Експортуємо екшен для зміни фільтра
export const { changeFilter } = filtersSlice.actions;

// Селектор для отримання значення фільтра
export const selectNameFilter = (state) => state.filters.name;

// Експортуємо редюсер
export default filtersSlice.reducer;
