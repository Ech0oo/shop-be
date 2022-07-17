# shop-be

The request returns product by id from productList (product-service/src/functions/productList.ts or make a request below)
[https://si1togqld8.execute-api.eu-west-1.amazonaws.com/dev/product/7567ec4b-b10c-45c5-9345-fc73c48a80a1](https://si1togqld8.execute-api.eu-west-1.amazonaws.com/dev/product/7567ec4b-b10c-45c5-9345-fc73c48a80a1)
Return an object with error message: 'Product not found'
[https://si1togqld8.execute-api.eu-west-1.amazonaws.com/dev/product/no-id](https://si1togqld8.execute-api.eu-west-1.amazonaws.com/dev/product/no-id)

The request returns list of products
[https://si1togqld8.execute-api.eu-west-1.amazonaws.com/dev/product-list](https://si1togqld8.execute-api.eu-west-1.amazonaws.com/dev/product-list)

FE with integrated BE (list of products front gets from backend).
[https://d2mhh9b6o3ryoh.cloudfront.net/](https://d2mhh9b6o3ryoh.cloudfront.net/)

Additional:
    + Async/await is used in lambda functions
    + ES6 modules are used from the box
    + Lambda handlers (getProductList, getProductById) code is written not in 1 single module
    + Lambda handlers are covered by basic UNIT tests
    + get product by id scenario is handled by API ("Product not found" error)

[FE MR Link](https://github.com/Ech0oo/shop-react-redux-cloudfront/pull/2)
