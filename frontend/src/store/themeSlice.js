import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: state => {
      state.value = !state.value
    },
  }
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer
