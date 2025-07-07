// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import onboardingReducer from './slices/onboardingSlice';

export const store = configureStore({
  reducer: {
    // The key 'onboarding' is how you will access this state in your components
    onboarding: onboardingReducer,
    // You can add other reducers here for auth, user profile, etc.
    // auth: authReducer,
  },
});