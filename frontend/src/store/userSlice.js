import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
  refresh: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.value = true
      state.refresh = action.payload
    },
    signOut: (state) => {
      state.value = false
      state.refresh = null
    },
  }
})

export const { signIn, signOut } = userSlice.actions

export default userSlice.reducer
