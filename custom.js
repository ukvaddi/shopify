Shopify.onCartUpdate = function(cart) {
  alert("There are now "+ cart.item_count + " items in the cart."); 
  alert("hi");   
}
Shopify.onItemAdded = function(lineItem) {
	console.log(lineItem.title + ' was added to the shopping cart');
  alert("hi..");
};
alert("hi..this is shopify");
