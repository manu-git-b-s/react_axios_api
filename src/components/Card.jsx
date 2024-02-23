function Card({
  product_name,
  product_price,
  product_image,
  product_description,
}) {
  return (
    <div className="card mb-5 me-3" style={{ width: "18rem" }}>
      <img src={product_image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product_name}</h5>
        <p className="card-text">{product_description}</p>
        <p className="card-subtitle">$ {product_price}</p>
      </div>
    </div>
  );
}

export default Card;
