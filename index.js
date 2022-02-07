// Code your solution in this file!
const headquarters = 42;

function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation > headquarters) {
        return pickupLocation - headquarters
    } else {
        return headquarters - pickupLocation;
    }
}
    //returns the number of blocks given a value
const feetPerBlock = 264
function distanceFromHqInFeet(pickupLocation) {
    const numberOfBlocks = distanceFromHqInBlocks(pickupLocation);
    return numberOfBlocks * feetPerBlock;
        // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
        // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
      
        // the return value of distanceFromHqInBlocks can then be used to calculate feet
    
}

function distanceTravelledInFeet(startBlock, destinationBlock) {
    let totalBlocks
    if (startBlock > destinationBlock) {
        totalBlocks = startBlock - destinationBlock;
    } else {
        totalBlocks = destinationBlock - startBlock;
    }
    return totalBlocks * feetPerBlock;
    //returns the number of feet traveled
  }

  function calculatesFarePrice(startB, destinationB) {
      const totalFeet = distanceTravelledInFeet(startB, destinationB)
      if (totalFeet < 400){
        return 0
      } else if (totalFeet >= 400 && totalFeet <= 2000){
        const chargeIf = totalFeet - 400
        return chargeIf * 0.02
      } else if (totalFeet > 2000 && totalFeet <= 2500){
        return 25.00
      } else {
        return 'cannot travel that far'
      }

        
    

    //returns the fare for the customer
  }
