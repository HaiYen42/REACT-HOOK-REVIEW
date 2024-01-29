import React, { useMemo, useRef, useState } from "react";

export default function UseMemo() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: Number(price),
      },
    ]);
    setName("");
    setPrice("");
    refName.current.focus();
  };
  const refName = useRef();

  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log("tính toán lại ....");
      return result + prod.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <div style={{ padding: "10px 32px" }}>
      <input
        ref={refName}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name ..."
      />
      <br />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter the price"
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total:{total}
      <ul>
        {products.map((prod, index) => (
          <li key={index}>
            {prod.name}-{prod.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
