/*
# Project 2: Programming Fundamentals

## Description

Create a vending machine that handles money, dispenses products, and gives change.

## Week 6

This week we'll improve our code with objects and functions, and hook the app up to buttons to give the user a better experience.

### Task 1: Improve Data Structure

It's pretty annoying having three separate arrays for the product names, the product prices, and the product quantities. Here come objects to the rescue! 

Change the code so that there's only one array for the products data. That array should have product objects that have properties for the name, price, and quantity.

Something like this:

```javascript
const products = [
    {
        name: "Cheetos",
        price: 1.15,
        quantity: 5
    },
    {
        name: "Popcorn",
        price: 2,
        quantity: 10
    },
    {
        name: "Fritos",
        price: 3.5,
        quantity: 4
    },
    {
        name: "Water Bottle",
        price: 1,
        quantity: 2
    },
    {
        name: "Sun Chips",
        price: 2,
        quantity: 0
    },
    {
        name: "Doritos",
        price: 4,
        quantity: 0
    },
]
```
*/
const products = [
   {
      name: 'Cheetos',
      price: 1.15,
      quantity: 5,
   },
   {
      name: 'Popcorn',
      price: 2,
      quantity: 10,
   },
   {
      name: 'Fritos',
      price: 3.5,
      quantity: 4,
   },
   {
      name: 'Water Bottle',
      price: 1,
      quantity: 2,
   },
   {
      name: 'Sun Chips',
      price: 2,
      quantity: 0,
   },
   {
      name: 'Doritos',
      price: 4,
      quantity: 0,
   },
];
/*
When you make that change, a lot of things are going to break! Our loop from Week 5 Task 3 will need to be adjusted to work a little differently. Rather than getting the **index**, we can get the **product** object and save that in a variable. We no longer need the **product price** and **product quantity** variables, we can just access the properties on the **product** object.

Get the vending machine working again.

### Testing Task 1

---

Product name: `"Cheetos"`  
Customer balance: `2`  
Logged to console:    
`Enjoy your Cheetos! Here's your change: $0.85`  
`Number left in machine: 4  Customer balance: $0.00`  


--

Product name: `"Water Bottle"`  
Customer balance: `0`  
Logged to console:  
`You haven't added enough money for that product. You need to add $1.00 more.`  
`Number left in machine: 2 Customer balance: $0.00`  

--

Product name: `"Doritos"`  
Customer balance: `2`  
Logged to console:  
`Sorry, we're out of Doritos. Returned: $2.00`  
`Number left in machine: 0  Customer balance: $0.00`   

--

Enter into prompt: `Banana`  
Customer balance: `2`  
Logged to console:  
`Product not found. Returned: $2.00`  
`Customer balance: $0.00`


//***************************************************
// updated logic for Task 1
console.log('Testing Task 1\n-----------\n\n');
// customer inserts money
customerBalance = 2;
// prompt user for product name
productName = prompt(`${products.map(product => product.name).join('\n')}
\n\nWhat product would you like?`);

// loop to find product in productNamesList
productIndex = -1;

for (let i = 0; i < products.length; i++) {
   if (
      productName != null &&
      productName.toUpperCase() === products[i].name.toUpperCase()
   ) {
      productIndex = i;
   }
}

if (productIndex === -1) {
   console.log(`Product not found. Returned: $${customerBalance.toFixed(2)}`);
   customerBalance = 0;
   productQuantity = 0;
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: $${customerBalance.toFixed(
         2
      )}`
   );
} else {
   productName = products[productIndex].name;
   productPrice = products[productIndex].price;
   productQuantity = products[productIndex].quantity;
   change = customerBalance - productPrice;
   if (productQuantity === 0) {
      console.log(
         `Sorry, we're out of ${productName}. Returned: $${customerBalance.toFixed(2)}`
      );
      customerBalance = 0;
      console.log(
         `Number left in machine: ${productQuantity} Customer balance: $${customerBalance.toFixed(
            2
         )}`
      );
   } else if (customerBalance < productPrice) {
      console.log(
         `You haven't added enough money for that product. You need to add $${(
            productPrice - customerBalance
         ).toFixed(2)} more.`
      );
      console.log(
         `Number left in machine: ${productQuantity} Customer balance: $${customerBalance.toFixed(
            2
         )}`
      );
   } else {
      customerBalance = customerBalance - (productPrice + change);
      products[productIndex].quantity = productQuantity - 1;
      console.log(`Enjoy your ${productName}! Here's your change: $${change.toFixed(2)}`);
      console.log(
         `Number left in machine: ${
            products[productIndex].quantity
         } Customer balance: $${customerBalance.toFixed(2)}`
      );
   }
}
console.log('-----------\n\n');

---

### Task 2: Format Money Function

We're formatting money values in quite a few places. We've repeated the same code in each of those places, which is not a good practice in programming. If we want to change how we format the money, we'd have to make that change in multiple places.

We'll fix that by making a **format money** function. The function should take in a **money amount** as a parameter and return a formatted string.

Replace everywhere you were formatting a money value with a call to the **format money** function.

Now there should only be one `$` in your JavaScript file and it should be in the **format money** function.

function formatMoney(moneyAmount) {
   return `$${moneyAmount.toFixed(2)}`;
}


### Testing Task 2

Pretend we're using our vending machine in Europe. Change the `$` in the **format money** function to a `€`.

We no longer care about pennies. Change the **format money** function to put only one number after the decimal point.

Test to make sure that everything logged out is using the updated money format.

`Sorry, we're out of Doritos. Returned: €2.0`  
`Number left in machine: 0  Customer balance: €0.0`

Change the **format money** function back to using `$` and putting two numbers after the decimal point.

// updated logic for Task 2
function formatMoney(moneyAmount) {
   return `€${moneyAmount.toFixed(1)}`;
}

console.log('Testing Task 2\n-----------\n\n');
// customer inserts money
customerBalance = 2;
// prompt user for product name
productName = prompt(`${products.map(product => product.name).join('\n')}
\n\nWhat product would you like?`);

// loop to find product in productNamesList
productIndex = -1;

for (let i = 0; i < products.length; i++) {
   if (
      productName != null &&
      productName.toUpperCase() === products[i].name.toUpperCase()
   ) {
      productIndex = i;
   }
}

if (productIndex === -1) {
   console.log(`Product not found. Returned: ${formatMoney(customerBalance)}`);
   customerBalance = 0;
   productQuantity = 0;
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: ${formatMoney(
         customerBalance
      )}`
   );
} else {
   productName = products[productIndex].name;
   productPrice = products[productIndex].price;
   productQuantity = products[productIndex].quantity;
   change = customerBalance - productPrice;
   if (productQuantity === 0) {
      console.log(
         `Sorry, we're out of ${productName}. Returned: ${formatMoney(customerBalance)}`
      );
      customerBalance = 0;
      console.log(
         `Number left in machine: ${productQuantity} Customer balance: ${formatMoney(
            customerBalance
         )}`
      );
   } else if (customerBalance < productPrice) {
      console.log(
         `You haven't added enough money for that product. You need to add ${formatMoney(
            productPrice - customerBalance
         )} more.`
      );
      console.log(
         `Number left in machine: ${productQuantity} Customer balance: ${formatMoney(
            customerBalance
         )}`
      );
   } else {
      customerBalance = customerBalance - (productPrice + change);
      products[productIndex].quantity = productQuantity - 1;
      console.log(
         `Enjoy your ${productName}! Here's your change: ${formatMoney(change)}`
      );
      console.log(
         `Number left in machine: ${
            products[productIndex].quantity
         } Customer balance: ${formatMoney(customerBalance)}`
      );
   }
}
console.log('-----------\n\n');


### Task 3: Money Buttons

It's buttons time! Make a few buttons for adding money to the machine.

Here are mine:

![Screenshot of two buttons with the text Insert $1 and the text Insert 25 cents](money-buttons.png)

>**Note**
>
>To use Bootstrap you'll need to use **npm init** and **npm install** to get the Bootstrap files into your project folder. You'll also need a .gitignore file to ignore the node_modules folder.
>
>Another option is to write your own CSS to style the buttons.

Make a function that takes a parameter of how much money to add to the machine and adds it to the customer balance.

Have the function log out the updated customer balance. Maybe something like this:

`$1.00 added. Balance: $2.00`


>**Note:** Use your **format money** function!

Hook up each button so it calls the function and passes the correct amount into the parameter.

Change the **customer balance** variable so it starts at zero.
*/
let customerBalance = 0;
function formatMoney(moneyAmount) {
   return `$${moneyAmount.toFixed(2)}`;
}
function addMoney(moneyAmount) {
   customerBalance += moneyAmount;
   console.log(
      `${formatMoney(moneyAmount)} added. Balance: ${formatMoney(customerBalance)}`
   );
}
/*
### Testing Task 3

Test that each button adds the correct amount to the balance.

![Gif of testing money buttons](money-testing.gif)

### Task 4: Product Buttons

Make a button for each product.

Make one extra button for a product that doesn't exist, so we can test the "Product not found" functionality.

Here are mine:

![Seven buttons for each product and an extra Banana button](product-buttons.png)

Take all the vending code and put it in a function. Remove the prompt for the item name and the non-parameter **item name** variable. Instead, use a parameter.

Hook up each button to the vend function.
*/
function vend(productIndex) {
   // loop to find product in productNamesList

   if (productIndex < 0 || productIndex >= products.length) {
      console.log(`Product not found. Returned: ${formatMoney(customerBalance)}`);
      customerBalance = 0;
      productQuantity = 0;
      console.log(
         `Number left in machine: ${productQuantity} Customer balance: ${formatMoney(
            customerBalance
         )}`
      );
   } else {
      productName = products[productIndex].name;
      productPrice = products[productIndex].price;
      productQuantity = products[productIndex].quantity;
      change = customerBalance - productPrice;
      if (productQuantity === 0) {
         console.log(
            `Sorry, we're out of ${productName}. Returned: ${formatMoney(
               customerBalance
            )}`
         );
         customerBalance = 0;
         console.log(
            `Number left in machine: ${productQuantity} Customer balance: ${formatMoney(
               customerBalance
            )}`
         );
      } else if (customerBalance < productPrice) {
         console.log(
            `You haven't added enough money for that product. You need to add ${formatMoney(
               productPrice - customerBalance
            )} more.`
         );
         console.log(
            `Number left in machine: ${productQuantity} Customer balance: ${formatMoney(
               customerBalance
            )}`
         );
      } else {
         customerBalance = customerBalance - (productPrice + change);
         products[productIndex].quantity = productQuantity - 1;
         console.log(
            `Enjoy your ${productName}! Here's your change: ${formatMoney(change)}`
         );
         console.log(
            `Number left in machine: ${
               products[productIndex].quantity
            } Customer balance: ${formatMoney(customerBalance)}`
         );
      }
   }
}

/*
### Testing Task 4

Test that the app still works in all the following ways

* If you add exactly enough money, you can vend an item and get zero change
* After vending an item and getting your change, your customer balance goes back to zero and you have to add money again
* If you add too much money, you can vend an item and get the extra as change
* You can't vend an item if you haven't added enough money
* You can't vend an item with zero quantity, and your money is returned (customer balance goes back to zero)
* If you keep vending the same item over and over, the quantity decreases by one each time, and when it hits zero you can't vend it anymore
* You can't vend an item that doesn't exist, and your money is returned (customer balance goes back to zero)

![Gif of testing product buttons](product-testing.gif)

### Task 5: Cancel Button

Make a cancel button that returns all the user's money (sets the customer balance to zero) and logs out an appropriate message.
*/
function cancel() {
   console.log(`Returned: ${formatMoney(customerBalance)}`);
   customerBalance = 0;
   console.log(`Customer balance: ${formatMoney(customerBalance)}`);
}
/*
### Testing Task 5

Test that the cancel button works and resets the customer balance.

![Gif of testing cancel button](cancel-testing.gif)

### Conclusion

We did it! We made a vending machine with JavaScript! The user can add money to the machine, vend items, and get change.
*/
