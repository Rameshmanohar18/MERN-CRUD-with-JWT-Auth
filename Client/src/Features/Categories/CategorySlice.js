import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:5000/api/categories";

export const fetchCategories = createAsyncThunk(
  "categories/fetch",
  async () => {
    const res = await axios.get(API);
    return res.data;
  }
);

export const addCategory = createAsyncThunk(
  "categories/add",
  async (name) => {
    const res = await axios.post(API, { name });
    return res.data;
  }
);

export const deleteCategory = createAsyncThunk(
  "categories/delete",
  async (id) => {
    await axios.delete(`${API}/${id}`);
    return id;
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    items: [],
    loading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.items = action.payload;
      })

      .addCase(addCategory.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.items = state.items.filter(
          c => c._id !== action.payload
        );
      });
  }
});

export default categorySlice.reducer;