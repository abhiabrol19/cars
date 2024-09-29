import { createSlice, nanoid } from '@reduxjs/toolkit';

const carSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    data: []
  },
  reducers: {
    changeSearchTerm (state, action) {
      state.searchTerm = action.payload;
    },
    // Assuming the action.payload has the following propertis {name:'test', cost: 123}
    addCar (state, action) {
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    // action.payload === id of the car needed to be removed
    removeCar (state, action) {
      const updated = state.data.filter((car) => {
        return car.id !== action.payload;
      });
      state.data = updated;
    },
  },
});


export const { changeSearchTerm, addCar, removeCar } = carSlice.actions;
export const carsReducer = carSlice.reducer;
