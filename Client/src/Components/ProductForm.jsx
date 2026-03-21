
import { useDispatch, useSelector } from "react-redux"
import { addProduct } from "../Feautures/Products/ProductSlice.js"
import { useState } from "react"

export default function ProductForm(){

  const categories = useSelector(state=>state.categories)
  const dispatch = useDispatch()

  const [form,setForm] = useState({
    name:"",
    price:"", 
    stock:"",
    categoryId:""
  })




  const handleSubmit = (e)=>{
  e.preventDefault()

  dispatch(addProduct({
    ...form,
    price: Number(form.price),
    stock: Number(form.stock),
    categoryId: Number(form.categoryId)
  }))

  setForm({
    name:"",
    price:"",
    stock:"",
    categoryId:""
  })
}

  return(

    <div className="form-container">

      <form className="product-form" onSubmit={handleSubmit}>

        <h2>Add Product</h2>
 <select
          value={form.categoryId}
          onChange={(e)=>setForm({...form,categoryId:e.target.value})}
        >
          <option value="">Select Category</option>

          {categories.map(cat=>(
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}

        </select>
        <input
          value={form.name}
          placeholder="Product Name"
          onChange={(e)=>setForm({...form,name:e.target.value})}
        />

        <input
          value={form.price}
          placeholder="Price"
          onChange={(e)=>setForm({...form,price:e.target.value})}
        />

        <input
          value={form.stock}
          placeholder="Stock Quantity"
          onChange={(e)=>setForm({...form,stock:e.target.value})}
        />

       

        <button  className="btn btn-success" type="submit">
          Add Product
        </button>

      </form>

    </div>

  )
}