import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function EditProduct({ id }) {
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    product_id: "",
    product_name: "",
    product_price: "",
    product_description: "",
  });

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    await axios
      .get(`https://65d582e43f1ab8c6343722c3.mockapi.io/api/products/${id}`)
      .then((res) => setEditData(res.data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (
      editData.product_id === "" ||
      editData.product_name === "" ||
      editData.product_price === "" ||
      editData.product_description === ""
    ) {
      alert("Input fields cannot be empty");
    } else {
      await axios
        .put(
          `https://65d582e43f1ab8c6343722c3.mockapi.io/api/products/${id}`,
          editData
        )
        .then((res) => setEditData(res.data))
        .catch((err) => console.log(err));
      navigate("/products");
    }
  };

  return (
    <div className="container mt-5 bg-light p-5 w-50">
      <form onSubmit={handleFormSubmit}>
        <h1 className="text-center mb-4">Edit Product</h1>
        <div className="mb-3">
          <label htmlFor="product_name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="product_name"
            name="product_name"
            onChange={handleChange}
            value={editData.product_name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="product_id" className="form-label">
            Product ID
          </label>
          <input
            type="text"
            className="form-control"
            id="product_id"
            name="product_id"
            onChange={handleChange}
            value={editData.product_id}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="product_price" className="form-label">
            Product Price
          </label>
          <input
            type="text"
            className="form-control"
            id="product_price"
            name="product_price"
            onChange={handleChange}
            value={editData.product_price}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="product_description" className="form-label">
            Product Description
          </label>
          <input
            type="text"
            className="form-control"
            id="product_description"
            name="product_description"
            onChange={handleChange}
            value={editData.product_description}
          />
        </div>

        <div className="d-grid mt-5">
          <button type="submit" className="btn btn-dark">
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;
