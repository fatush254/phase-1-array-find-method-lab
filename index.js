// code your solution here
// code your solution here
function superbowlWin(record) {
    // Check if the record contains any win objects
    const win = record.find(game => game.result === "W");
  
    // If a win object is found, return the year
    if (win) {
      return win.year;
    } else {
      // If no win object is found, return undefined
      return undefined;
    }
  }
  
  // Export the superbowlWin function to make it available to other modules if needed
  module.exports = superbowlWin;
