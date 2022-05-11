// put the timer here

//----------------------------------------------------------------------------------------------------------------------

// save a var to local storage
var saveVar = function () {
  localStorage.setItem("varName", JSON.stringify(varName));
};

// load a var from local storage
var loadVar = function () {
  varName = JSON.parse(localStorage.getItem("varName"));

  // if nothing in localStorage, create a new object to track the var
  if (!varName) {
    varName = {
      property1: [],
      property2: [],
      property3: [],
    };
  }
};

//----------------------------------------------------------------------------------------------------------------------

//-----WARNING: uses jQuery. TODO: translate into vanilla js.
//clickable p element into editable text area, vice versa, and save to local storage

//revert from input box to p element on interaction with anything else (blur event)
$(".list-group").on("blur", "textarea", function () {
  // get the text area's current value/text
  var text = $(this).val().trim();

  // get the parent ul's id attribute
  var status = $(this).closest(".list-group").attr("id").replace("list-", "");

  // get the task's position in the list of other li elements
  var index = $(this).closest(".list-group-item").index();

  //save text in the right place in all the arrays then to lStorage
  tasks[status][index].text = text;
  saveTasks();

  // recreate p element
  var taskP = $("<p>").addClass("m-1").text(text);

  // replace text area with p element
  $(this).replaceWith(taskP);
});

//----------------------------------------------------------------------------------------------------------------------
