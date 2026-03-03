import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  return (
    <div>
      <h2>Products</h2>
      <div className="d-flex flex-wrap">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;