// src/store/slices/onboardingSlice.js
import { createSlice } from '@reduxjs/toolkit';

// This is the initial state, same as in Zustand
const initialState = {
  selectedAges: [],
  likedCategories: [],
  recommendationPreference: null,
    wantsCommuteActivities: null, // 1. Add new state for the commute preference

};

const onboardingSlice = createSlice({
  name: 'onboarding', // A name for this slice of state
  initialState,
  // Reducers are functions that define how the state can be updated.
  // Redux Toolkit uses Immer internally, so you can "mutate" state directly.
  reducers: {
    setSelectedAges: (state, action) => {
      // action.payload is the value passed to the function
      state.selectedAges = action.payload;
    },
    addLikedCategory: (state, action) => {
      state.likedCategories.push(action.payload);
    },
    setRecommendationPreference: (state, action) => {
      state.recommendationPreference = action.payload;
    },


      // 2. Add new reducer for the commute preference
    setWantsCommuteActivities: (state, action) => {
      state.wantsCommuteActivities = action.payload;
    },
    // A reducer that doesn't need a payload
    resetOnboarding: (state) => {
      // Reset the state to its initial values
      state.selectedAges = [];
      state.likedCategories = [];
      state.recommendationPreference = null;
    },
  },
});

// Export the "actions" - these are the functions you'll call from your components
export const {
  setSelectedAges,
  addLikedCategory,
  setRecommendationPreference,
    setWantsCommuteActivities, // 3. Export the new action

  resetOnboarding,
} = onboardingSlice.actions;

// Export the reducer itself to be added to the main store
export default onboardingSlice.reducer;