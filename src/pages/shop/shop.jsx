
import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = PRODUCTS.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())||
    product.dealer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Car Shop</h1>

        <div className="searchBar">
        <input
         style={{ width: '130%', height: '30px'}}
          type="text"
          placeholder="Search by name, or by dealer...."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      </div>

     

      <div className="products">
        {filteredProducts.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
