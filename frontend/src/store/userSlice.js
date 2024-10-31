import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: state => {
      state.value = true
    },
    signOut: state => {
      state.value = false
    },
  }
})

export const { signIn, signOut } = userSlice.actions

export default userSlice.reducer
