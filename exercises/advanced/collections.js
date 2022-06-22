/**
 * Using Promise.all, write a function, combineFirstLineOfManyFiles, that:
 *    1. Reads each file at the path in the `filePaths` array
 *    2. Plucks the first line of each file
 *    3. Joins each first line into a new file
 *      - The lines should be in the same order with respect to the input array
 *      - i.e. the second line in the new file should be the first line of `filePaths[1]`
 *    4. Writes the new file to the file located at `writePath`
 */

var pCon = require('../bare_minimum/promiseConstructor.js');
var fs = require('fs');
var Promise = require('bluebird');
var pWriteFile = Promise.promisify(fs.writeFile)


var combineFirstLineOfManyFiles = function(filePaths, writePath) {
  // TODO
  /*
  for each file in filepaths pluck it with map(?)
  pluck outputs a promise, put that into an array.
  promise all on the array of promises, to get an array of the file first lines
  with the file first line, .join('/n') and set that as our new data
  fs.writeFile to writepath with the joined data as the content.

  pluck map

  */
  var outputText = '';
  var promiseArray = filePaths.map((file) => {
    return pCon.pluckFirstLineFromFileAsync(file)
  })
  // console.log('promiseArray:', promiseArray)

  return Promise.all(promiseArray).then((firstLines) => {
    outputText = firstLines.join('\n')
    // console.log('outputText:', outputText);
    return pWriteFile(writePath, outputText)
  })



};

// Export these functions so we can unit test them
module.exports = {
  combineFirstLineOfManyFiles: combineFirstLineOfManyFiles
};