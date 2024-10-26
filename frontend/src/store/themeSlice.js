import { createSlice } from '@reduxjs/toolkit'

const initialState = false

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: state => state = !state,
  }
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer
