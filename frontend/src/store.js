import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './store/themeSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer
  }
})
