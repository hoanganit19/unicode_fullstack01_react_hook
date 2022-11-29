import React, { useState, useMemo } from "react";

export default function Products() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [products, setProducts] = useState([
    {
      name: "sp 1",
      price: 12000,
    },
  ]);

  const handleChangeValue = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }

    if (e.target.name === "price") {
      setPrice(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts(products.concat({ name: name, price: parseInt(price) }));
    setName("");
    setPrice("");
  };

  const total = useMemo(() => {
    return products.reduce((total, product) => {
      console.log("total");
      return total + product.price;
    }, 0);
  }, [products]);

  //useMemo phải có return

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <input
            type="text"
            name="name"
            placeholder="Name..."
            required
            onChange={handleChangeValue}
            value={name}
          />
        </p>
        <p>
          <input
            type="number"
            name="price"
            placeholder="Price..."
            required
            onChange={handleChangeValue}
            value={price}
          />
        </p>
        <button type="submit">Add</button>
      </form>
      <hr />
      <h2>Total: {total}</h2>
      <h2>Producsts</h2>
      {products.map(({ name, price }, index) => {
        return (
          <div key={index}>
            <h3>{name}</h3>
            <p>{price}</p>
          </div>
        );
      })}
    </div>
  );
}
