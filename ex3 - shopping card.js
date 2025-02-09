// List of products in the shop : each product having a unique id, name and unit price
const PRODUCTS = [
  { id: 1, name: "Apple", price: 2.5 },
  { id: 2, name: "Banana", price: 1.5 },
  { id: 3, name: "Orange", price: 3 },
  { id: 4, name: "Rice", price: 1.5 },
  { id: 5, name: "Chocolate", price: 3 },
];

// Shopping cart : which contain the items the customer wants to buy and their quantity
const SHOPPING_CART = [
  { id: 1, quantity: 2 },
  { id: 3, quantity: 1 },
];

/**
 *  Get the total amount of the current shopping cart.
 * @returns {number} the total amount of the shopping cart
 */
function getCartTotalAmount() {
  let result = 0;
  // Iterate through the shopping cart and calculate the total
  SHOPPING_CART.forEach(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (product) {
      result += product.price * item.quantity;
    }
  });
  return result;
}

/**
 * Add a product to the shopping cart.
 *
 * CASE 1: If the product id already exists in the cart, just increment its quantity.
 * CASE 2: If the product id does NOT exist in the cart, add a new item with quantity 1.
 * @param {number} productId the product id to add
 */
function addProductToCart(productId) {
  // Check if product is already in the cart
  const cartItem = SHOPPING_CART.find(item => item.id === productId);
  
  if (cartItem) {
    // If the product exists, increment its quantity
    cartItem.quantity++;
  } else {
    // If the product doesn't exist, add it with quantity 1
    SHOPPING_CART.push({ id: productId, quantity: 1 });
  }
}

/**
 * Remove a product from the shopping cart.
 *
 * CASE 1: If quantity >= 2, decrement its quantity.
 * CASE 2: If quantity == 1, remove the item from the cart.
 * CASE 3: If the product does not exist in the cart, do nothing.
 * @param {number} productId the product id to remove
 */
function removeProductFromCart(productId) {
  const cartItem = SHOPPING_CART.find(item => item.id === productId);
  
  if (cartItem) {
    if (cartItem.quantity > 1) {
      // Decrease quantity if it's greater than 1
      cartItem.quantity--;
    } else {
      // Remove the item from the cart if quantity is 1
      const index = SHOPPING_CART.indexOf(cartItem);
      SHOPPING_CART.splice(index, 1);
    }
  }
}

// --------------------------------------------------------
// TESTS ZONE
// --------------------------------------------------------

// test 1 - Get the total amount of the cart
console.log(getCartTotalAmount()); // Should be 8

// test 2 - Add product with id 1 to the cart (quantity 2 -> 3)
addProductToCart(1);
console.log(JSON.stringify(SHOPPING_CART)); // Should be [{"id":1,"quantity":3},{"id":3,"quantity":1}]

// test 3 - Add product with id 2 to the cart (new product)
addProductToCart(2);
console.log(JSON.stringify(SHOPPING_CART)); // Should be [{"id":1,"quantity":3},{"id":3,"quantity":1},{"id":2,"quantity":1}]

// test 4 - Remove product with id 1 from the cart (quantity 3 -> 2)
removeProductFromCart(1);
console.log(JSON.stringify(SHOPPING_CART)); // Should be [{"id":1,"quantity":2},{"id":3,"quantity":1},{"id":2,"quantity":1}]

// test 5 - Remove product with id 2 from the cart (quantity 1 -> removed)
removeProductFromCart(2);
console.log(JSON.stringify(SHOPPING_CART)); // Should be [{"id":1,"quantity":2},{"id":3,"quantity":1}]
