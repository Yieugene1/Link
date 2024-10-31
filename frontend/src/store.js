import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './store/themeSlice'
import userReducer from './store/userSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer
  }
})
