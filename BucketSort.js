function bucketSort(items) {
  //items is unsorted array

  //if 0 or 1 item in list: SORTED!
  if (items.length <= 0) {
    return items
  }

  //per my.GA a good num of buckets is the sqrt of number of items
  //but I can't get it to work.
  let bucketSize =  Math.floor(Math.sqrt(items.length))

  let minValue = items[0];
  let maxValue = items[0];

  //set max and min values
  for (let i = 0; i < items.length; i++) {
    if (items[i] < minValue) { minValue = items[i] }
    else if (items[i] > maxValue) { maxValue = items[i] }
  }

//set up array of arrays (buckets)
  let numBucks = Math.floor((maxValue - minValue) / bucketSize) + 1;
  let arrOfBucks = Array(numBucks);
  for (let i = 0; i < arrOfBucks.length; i++) {
    arrOfBucks[i] = [];
  }

  //push items array into arrOfBucks
  for (let i = 0; i < items.length; i++) {
    let buckIndex = Math.floor((items[i] - minValue) / bucketSize)
    console.log(`itemToBeBucked: ${buckIndex}`);
    arrOfBucks[buckIndex].push(items[i])
  }

  console.log(`arrOfBucks after push! ::: ${arrOfBucks}`);

  //initialize final array
  let totatllySortedArray = []

  //internally sort buckets
  for (let i = 0; i < arrOfBucks.length; i++) {
    let sortedBucket = arrOfBucks[i].sort()
    arrOfBucks[i] = sortedBucket
    totatllySortedArray = totatllySortedArray.concat(arrOfBucks[i])
  }

  return totatllySortedArray
}

module.exports = bucketSort;



// ::::: WAS ATTEMPTING TO USE AVG of VALUES TO SOLVE BUCKET CATEGORIES. ::::
// const getAvg = (arr) => arr.reduce((a,b) => a+b, 0) / arr.length
// let itemAvg = getAvg(items)
