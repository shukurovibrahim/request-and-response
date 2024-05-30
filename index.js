// Solution 1: Achieved task without bonus requirement

import express from "express";
const app = express();

const products = [ 
  { name: "Product 1", price: 100, quantity: 5, id: 1 },
  { name: "Product 2", price: 10, quantity: 8, id: 2 },
  { name: "Product 3", price: 20, quantity: 2, id: 3 },
  { name: "Product 4", price: 30, quantity: 6, id: 4 },
  { name: "Product 5", price: 40, quantity: 3, id: 5 },
  { name: "Product 6", price: 24, quantity: 7, id: 6 },
  { name: "Product 7", price: 56, quantity: 8, id: 7 },
  { name: "Product 8", price: 44, quantity: 9, id: 8 },
  { name: "Product 9", price: 32, quantity: 1, id: 9 },
  { name: "Product 10", price: 30, quantity: 4, id: 10 }
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const product = products.find((product) => product.id == req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send({ error: "Product not found" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// Solution 2: Adding count and offset for more functionality

// import express from "express";
// const app = express();

// const products = [ 
//   { name: "Product 1", price: 100, quantity: 5, id: 1 },
//   { name: "Product 2", price: 10, quantity: 8, id: 2 },
//   { name: "Product 3", price: 20, quantity: 2, id: 3 },
//   { name: "Product 4", price: 30, quantity: 6, id: 4 },
//   { name: "Product 5", price: 40, quantity: 3, id: 5 },
//   { name: "Product 6", price: 24, quantity: 7, id: 6 },
//   { name: "Product 7", price: 56, quantity: 8, id: 7 },
//   { name: "Product 8", price: 44, quantity: 9, id: 8 },
//   { name: "Product 9", price: 32, quantity: 1, id: 9 },
//   { name: "Product 10", price: 30, quantity: 4, id: 10 }
// ];

// app.get("/products", (req, res) => {
//   const count = parseInt(req.query.count) || 10; // Default count is 10
//   const offset = parseInt(req.query.offset) || 0; // Default offset is 0

//   const paginatedProducts = products.slice(offset, offset + count);
  
//   res.json(paginatedProducts);
// });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

