/*calculateChange function
In the file cart-functions.js, create a calculateChange function and export it.
This function has two parameters:
total (a number)
payment (a number)
The function returns the difference between the payment and the total.
*/

function calculateChange(total, payment) {
  let difference = payment - total;
  return difference;
}

exports.calculateChange = calculateChange;

/*isSufficientPayment function
In the file cart-functions.js, 
create a isSufficientPayment function and export it.
This function has two parameters:
total (a number)
payment (a number)
The function returns true if payment is greater 
than or equal to total. It returns false otherwise.*/

function isSufficientPayment(total, payment) {
  if (payment >= total) {
    return true;
  } else {
    return false;
  }
}
exports.isSufficientPayment = isSufficientPayment;

/*calculateTotal function
In the file cart-functions.js, create a calculateTotal 
function and export it.
This function has one parameter:
itemsArray (an array of objects)
Each object in the itemsArray will have a name and a price. 
Here's an example
{ name: "Jelly", price: 3.50 }
The function returns the sum of the prices of all objects 
in the array. The names of the items do not affect this function.*/

function calculateTotal(itemsArray) {
  let sum = 0;

  for (let i = 0; i < itemsArray.length; i++) {
    sum += itemsArray[i].price;
  }

  return sum;
}

exports.calculateTotal = calculateTotal;

/*addItem function
In the file cart-functions.js, create an addItem function and export it.
This function has three parameters:
itemsArray (an array of objects)
name (a string)
price (a number)
Each object in the itemsArray will have a name and a price. Here's an example
{ name: "Jelly", price: 3.50 }
The function modifies itemsArray by adding a new object to the end of it. 
The new object should have name and price properties set from the name and 
price parameters.
The function does not return anything.*/

function addItem(itemsArray, name, price) {
  itemsArray = [...itemsArray, { name, price }];
}

exports.addItem = addItem;
