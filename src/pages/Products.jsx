import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Products({ setId }) {
  const [deletedData, setDeletedData] = useState([]);
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [deletedData]);

  const handleDelete = async (id) => {
    await axios
      .delete(`https://65d582e43f1ab8c6343722c3.mockapi.io/api/products/${id}`)
      .then((res) => setDeletedData(res.data))
      .catch((err) => console.log(err));
  };

  const fetchData = async () => {
    await axios
      .get("https://65d582e43f1ab8c6343722c3.mockapi.io/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };

  return (
    <div className="container">
      <h1 className="text-center my-3">Products</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Product Id</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Price</th>
            <th scope="col">Product Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.product_id}</td>
                <td>{item.product_name}</td>
                <td>${item.product_price}</td>
                <td>{item.product_description}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Products;