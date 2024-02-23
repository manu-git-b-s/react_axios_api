function Card({
  product_name,
  product_price,
  product_image,
  product_description,
}) {
  return (
    // card for products displaying
    <div className="card mb-5 me-3 p-0" style={{ width: "18rem" }}>
      <img src={product_image} className="card-img-top" alt={product_name} />
      <div className="card-body p-3">
        <h5 className="card-title">{product_name}</h5>
        <p className=" text-muted">{product_description}</p>
        <p className="fw-bold">$ {product_price}</p>
        <div className="d-grid">
          <button className="btn btn-sm rounded-3 btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
