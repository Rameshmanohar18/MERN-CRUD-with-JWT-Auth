
import { useSelector, useDispatch } from "react-redux"
import { deleteProduct, updateProduct } from "../Feautures/Products/ProductSlice.js"
import { useState } from "react"

export default function ProductTable() {

  const products = useSelector(state => state.products)
  const categories = useSelector(state => state.categories)
  const dispatch = useDispatch()

  const [editId, setEditId] = useState(null)
  const [editData, setEditData] = useState({})

  const getCategoryName = (id) => {
    const cat = categories.find(c => c.id === id)
    return cat ? cat.name : ""
  }

  const handleEdit = (product) => {
    setEditId(product.id)
    setEditData(product)
  }

  const handleSave = () => {
    dispatch(updateProduct(editData))
    setEditId(null)
  }

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?")
    if (confirmDelete) {
      dispatch(deleteProduct(id))
    }
  }

  return (
    <div className="table-container">

      <h2 className="table-title">Product List</h2>

      <table className="product-table">

        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {products.map(product => (
            <tr key={product.id}>

              {/* NAME */}
              <td>
                {editId === product.id ? (
                  <input
                    value={editData.name}
                    onChange={(e) =>
                      setEditData({ ...editData, name: e.target.value })
                    }
                  />
                ) : (
                  product.name
                )}
              </td>

              {/* CATEGORY */}
              <td>
                {editId === product.id ? (
                  <select
                    value={editData.categoryId}
                    onChange={(e) =>
                      setEditData({ ...editData, categoryId: Number(e.target.value) })
                    }
                  >
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  getCategoryName(product.categoryId)
                )}
              </td>

              {/* PRICE */}
              <td>
                {editId === product.id ? (
                  <input
                    type="number"
                    value={editData.price}
                    onChange={(e) =>
                      setEditData({ ...editData, price: e.target.value })
                    }
                  />
                ) : (
                  `₹${product.price}`
                )}
              </td>

              {/* STOCK */}
              <td>
                {editId === product.id ? (
                  <input
                    type="number"
                    value={editData.stock}
                    onChange={(e) =>
                      setEditData({ ...editData, stock: e.target.value })
                    }
                  />
                ) : (
                  product.stock
                )}
              </td>

              {/* ACTION */}
              <td>
                {editId === product.id ? (
                  <>
                    <button className="btn btn-primary" onClick={handleSave}>Save</button>
                    <button className="btn btn-info" onClick={() => setEditId(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button className="btn btn-primary"  onClick={() => handleEdit(product)}>
                      Edit
                    </button>

                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  )
}