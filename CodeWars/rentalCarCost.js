// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

// days > 7 == Total - 50
// days >= 3 < 7 == Total - 20
// Cost is 40 dollars per day

function rentalCarCost(days) {
  let total = 0;
  if (days >= 7) {
    total = days * 40;
    total = total - 50;
  } else if (days >= 3 && days < 7) {
    total = days * 40;
    total = total - 20;
  } else {
    total = days * 40;
  }
  return total;
}

console.log(rentalCarCost(6));
