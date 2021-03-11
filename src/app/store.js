import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/userSlice';
import appReducer from '../features/appSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    app:appReducer
  },
});
