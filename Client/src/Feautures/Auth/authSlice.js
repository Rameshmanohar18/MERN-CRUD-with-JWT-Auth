import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    register: (state, action) => {
      const users = JSON.parse(localStorage.getItem("users")) || []
      users.push(action.payload)
      localStorage.setItem("users", JSON.stringify(users))
    },

    login: (state, action) => {
      const users = JSON.parse(localStorage.getItem("users")) || []

      const foundUser = users.find(
        u => u.email === action.payload.email &&
             u.password === action.payload.password
      )

      if (foundUser) {
        state.user = foundUser
        localStorage.setItem("user", JSON.stringify(foundUser))
      } else {
        alert("Invalid credentials")
      }
    },

    logout: (state) => {
      state.user = null
      localStorage.removeItem("user")
    }

  }
})

export const { register, login, logout } = authSlice.actions
export default authSlice.reducer