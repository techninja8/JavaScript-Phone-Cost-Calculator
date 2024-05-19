const TAX_RATE = 0.05;
const THRESHOLD = 1000;

// Function to process formatted output
function formattedOutput(amount) {
  return "$" + amount.toFixed(2);
}

// Function to calculate tax costs
function calculateTax(basePrice) {
  return basePrice * TAX_RATE;
}

// Function to calculate to calculate total costs plus tax
function calculateTotalCost(basePrice) {
  const totalPrice = basePrice + calculateTax(basePrice);
  return totalPrice;
}

let totalCost = 0;


while (true) {
  //take in user input
  let userEntry = prompt("Please Input The Price of New Phone or Accessory (Cancel to exit)");
  
  // userEntry == null should be able to check if the console was cancelled
  if (userEntry == null) {
    break; // kindly break the loop
  }
  
  // turn user input to float (we're working with floats due to decimal points associated with taxes )
  let price = parseFloat(userEntry);
  
  // check if user input is an integer or float (NaN means Not a Number)
  if (isNaN(userEntry)) {
    alert("Input Only Numbers")
    console.error("Invalid Input Ignored");
    continue; // don't break the loop, ignore invalid input
  }
  
  // this is inside the loop indicating that it would be updated constantly wirh input of price
  totalCost += price;
  
  // Total cost is more than the one in the bank
  if (totalCost > THRESHOLD) {
    console.log(
      "Insufficient Funds\nAttempted transaction: \nSub Total Cost: ", formattedOutput(totalCost), "\nTax: ", formattedOutput(calculateTax(totalCost)), "\nTotal Cost: ", formattedOutput(calculateTotalCost(totalCost))
      );
    break;
  }

}

// A successful transaction
if (totalCost < THRESHOLD) {
    console.log(
      "Successful Transaction\nTransaction Details: \nSub Total Cost: ", formattedOutput(totalCost), "\nTax: ", formattedOutput(calculateTax(totalCost)), "\nTotal Cost: ", formattedOutput(calculateTotalCost(totalCost)), "\nRemaining Balance: ", formattedOutput(THRESHOLD - calculateTotalCost(totalCost))
    );
  }