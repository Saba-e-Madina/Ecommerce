import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          E-Shop
        </Link>

        <div>
          <Link className="btn btn-light mx-2" to="/products">
            Products
          </Link>

          <Link className="btn btn-light mx-2" to="/cart">
            Cart ({cartCount})
          </Link>

          <Link className="btn btn-light mx-2" to="/login">
            Login
          </Link>

          <Link className="btn btn-light mx-2" to="/admin">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;