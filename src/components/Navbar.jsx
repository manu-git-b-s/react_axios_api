import { Link } from "react-router-dom";

function Navbar() {
  return (
    // Navbar for routing to different pages
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Products CRUD
          <i className="fa-solid fa-cart-shopping ms-2"></i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link text-color">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link text-color">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/create-product" className="nav-link text-color">
                Create Product
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
