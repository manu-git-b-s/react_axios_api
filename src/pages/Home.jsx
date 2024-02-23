import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

function Home() {
  useEffect(() => {
    fetchData();
  }, []);

  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    await axios
      .get("https://65d582e43f1ab8c6343722c3.mockapi.io/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="home">
      <div className="container">
        <h1 className="my-3 text-center">Products</h1>
        <div className="row row-cols-md-6 row-cols-lg-4 row-cols-sm-12 d-flex justify-content-center">
          {/* Mapping all the products data retrieved from api */}
          {products.map((item, index) => {
            return <Card key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
