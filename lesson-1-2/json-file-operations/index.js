const productsOperations = require("./products-operations");

(async () => {
  //   const allProducts = await productsOperations.getAll();
  //   console.log(allProducts);

  //   const oneProduct = await productsOperations.getOne("3423234hdfsd");
  //   console.log(oneProduct);

  //   const newProduct = {
  //     name: "Tesla Model S",
  //     price: 1200000,
  //   };

  //   const newProductResult = await productsOperations.add(newProduct);
  //   console.log(newProductResult);

  //   const updateProduct = { ...oneProduct, price: 30000 };
  //   const updateProductResult = await productsOperations.update(
  //     oneProduct.id,
  //     updateProduct
  //   );
  // console.log(updateProductResult);
  const deleteResult = await productsOperations.del(
    "f7ea8b09-8911-4a82-b1c8-86e83dd1a9cd"
  );
  console.log(deleteResult);
})();
