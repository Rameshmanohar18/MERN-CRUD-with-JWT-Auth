import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux"
import { store } from "./Redux/App/Store.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


createRoot(document.getElementById("root")).render(

  <BrowserRouter>
   <ToastContainer position="top-right" autoClose={2000} />
   <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
  
  </BrowserRouter>
 
)