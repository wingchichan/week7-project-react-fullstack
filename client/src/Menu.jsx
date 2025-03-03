import { useEffect, useState } from "react";

export default function Menu() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("./products");
      const products = await res.json();
      setProducts(products);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.food_name}</li>
        ))}
      </ul>
    </div>
  );
}
