import { createSlice } from "@reduxjs/toolkit"
import { loadState} from "../../Utils/localStorage"

const initialState = loadState("products")

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {

    addProduct: (state, action) => {
      state.push({
        ...action.payload,
        id: Date.now()
      })
      localStorage.setItem("products", JSON.stringify(state))
    },

    deleteProduct: (state, action) => {
      const newState = state.filter(p => p.id !== action.payload)
      localStorage.setItem("products", JSON.stringify(newState))
      return newState
    },

    updateProduct: (state, action) => {
      const index = state.findIndex(p => p.id === action.payload.id)
      if (index !== -1) {
        state[index] = action.payload
      }
      localStorage.setItem("products", JSON.stringify(state))
    }

  }      
})

export const {
  addProduct,
  deleteProduct,
  updateProduct
} = productSlice.actions

export default productSlice.reducer