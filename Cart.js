function Cart({ cartItems, setCartItems }) {
    const removeItem = (id) => {
      const newCart = cartItems.filter((item) => item.id !== id);
      setCartItems(newCart);
    };
  
    if (cartItems.length === 0) return <h2>Your Cart is Empty</h2>;
  
    return (
      <div>
        <h2>Cart</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="card mb-2 p-2">
            <h5>{item.name}</h5>
            <p>Price: ${item.price}</p>
            <button
              className="btn btn-danger"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
        <h4>
          Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}
        </h4>
      </div>
    );
  }
  
  export default Cart;