/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var p = require('./promisification.js');
var pConst = require('./promiseConstructor.js');
var pWrite = Promise.promisify(fs.writeFile);



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return pConst.pluckFirstLineFromFileAsync(readFilePath).then((username) => {
    return p.getGitHubProfileAsync(username).then((response) => {
      //write the json response to write file path
      return pWrite(writeFilePath, JSON.stringify(response));
    })
  })
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
