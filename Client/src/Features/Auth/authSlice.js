


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:5000/api/auth";

/* ================= REGISTER ================= */

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post(`${API}/register`, userData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

/* ================= LOGIN ================= */ 

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post(`${API}/login`, userData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

/* ================= RESTORE STORAGE ================= */

const savedToken = localStorage.getItem("token");

// const savedUserData = localStorage.getItem("user");


// const savedUser = savedUserData ? JSON.parse(savedUserData) : null;
let savedUser = null;

try {
  const data = localStorage.getItem("user");
  savedUser = data ? JSON.parse(data) : null;
} catch (err) {
  console.warn("Invalid user in localStorage — clearing");
  localStorage.removeItem("user");
}


/* ================= SLICE ================= */

const authSlice = createSlice({
  name: "auth",

  initialState: {
    user: savedUser,
    token: savedToken || null,
    loading: false,
    error: null
  },

  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;

      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
  },       
  

  extraReducers: (builder) => {
    builder

      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })

      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;

        localStorage.setItem("token", action.payload.token);
        localStorage.setItem(
          "user",
          JSON.stringify(action.payload.user)
        );
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;