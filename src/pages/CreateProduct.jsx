import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  const navigate = useNavigate();
  const [createProduct, setCreateProduct] = useState({
    product_id: "",
    product_name: "",
    product_price: "",
    product_description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateProduct((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (
      createProduct.product_id === "" ||
      createProduct.product_name === "" ||
      createProduct.product_price === "" ||
      createProduct.product_description === ""
    ) {
      alert("Input Fields cannot be empty");
    } else {
      await axios
        .post(
          `https://65d582e43f1ab8c6343722c3.mockapi.io/api/products/`,
          createProduct
        )
        .then(() => {})
        .catch((err) => console.log(err));
      navigate("/products");
    }
  };

  return (
    <div className="container bg-light mt-5 p-5 w-50">
      <h1 className="text-center mb-4">Create Product</h1>

      <form onSubmit={handleFormSubmit}>
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
            value={createProduct.product_name}
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
            value={createProduct.product_id}
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
            value={createProduct.product_price}
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
            value={createProduct.product_description}
          />
        </div>

        <div className="d-grid mt-5">
          <button type="submit" className="btn btn-success">
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
