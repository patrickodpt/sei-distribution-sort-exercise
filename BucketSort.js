function bucketSort(items) {
  //items is unsorted array
  let numBucks =  Math.floor(Math.sqrt(items.length))
  const getAvg = (arr) => arr.reduce((a,b) => a+b, 0) / arr.length
  let itemAvg = getAvg(items)
  let arrOfBucks = [];

  console.log(`items is: ${items}`)
  console.log(`numBucks is: ${numBucks}`)
  console.log(`itemAvg is : ${itemAvg}`);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < itemAvg) {
      //TODO  NOT SURE WHERE TO GO FROM HERE.
      // DID NOT GET TO RECURSION
      // MAY NEED TO RETHINK ALL
    }
  }


  return items;
}

module.exports = bucketSort;
