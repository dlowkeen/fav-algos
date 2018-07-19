// --- Directions
// Given a list of wood planks of various lengths and prices and a target of desired wood length, n.
// Calculate the cheapest cost to achieve the desired length. As the length of wood increases, the 
// price per foot decreases so you get better value from buying the longer planks of wood. We do not 
// want to waste a bunch of wood as well. So find the cheapest cost that wastes the least amount of wood.

// Wood Lengths & Prices:
// 8ft - $8.00 - $1.00/ft
// 10ft - $9.00 - $0.90/ft
// 12ft - $10.00 - $0.83/ft
// 16ft - $12.00 - $0.75/ft

const woodPlanks = n => {
  let plank16 = Math.floor(n / 16);
  let remainder = n % 16;

  if (n <= 0) {return "Must be a positive integer"} // Can't buy negative wood!

  if (remainder > 12) {
    //purchase another 16ft plank
    plank16++;
    return plank16 * 12;

  } else if (10 < remainder && remainder <= 12) {
    return plank16 * 12 + 10; // add for 12ft plank

  } else if (8 < remainder && remainder <= 10) {
    return plank16 * 12 + 9; // add for 10ft plank 

  } else if (0 < remainder && remainder <= 8) {
    return plank16 * 12 + 8; // add for 8ft plank
    
  } else {
    return plank16 * 12; // add nothing
  }
}

module.exports = woodPlanks;