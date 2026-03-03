import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails({ cartItems, setCartItems }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const addToCart = () => {
    setCartItems([...cartItems, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: "200px" }} />
      <p>Price: ${product.price}</p>
      <button className="btn btn-success" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;