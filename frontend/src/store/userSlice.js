import { createSlice } from '@reduxjs/toolkit'
import { refresh } from '../lib/fetch';

const initialState = {
  value: false,
  refresh: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: state => {
      console.log("sign in")
      state.value = true
      state.refresh = refresh()
    },
    signOut: state => {
      console.log("sign out")
      state.value = false
      clearInterval(state.refresh)
      state.refresh = null
    },
  }
})

export const { signIn, signOut } = userSlice.actions

export default userSlice.reducer
