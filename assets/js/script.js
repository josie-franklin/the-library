// put the timer here

// save a var to local storage
var saveVar = function() {
    localStorage.setItem("varName", JSON.stringify(varName));
  };

// load a var from local storage
var loadVar = function() {
    varName = JSON.parse(localStorage.getItem("varName"));