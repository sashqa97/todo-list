function addElement(event) {
  if (event.charCode === 13) {
    var newItemText = event.target.value;
    var newLiElement = document.createElement("LI");
    var uLElement = document.getElementById("sortable");

    newLiElement.innerHTML =
      '<div class="checkbox"><label onclick="markDone(this)"><input type="checkbox" value="" />' + newItemText + "</label></div>";

    uLElement.appendChild(newLiElement);
  }
}

function markDone(element) {
  var liElement = element.parentElement.parentElement;
  var ulElement = liElement.parentElement;
  var doneUlElement = document.getElementById("done-items");

  var newElement = document.createElement("LI");
  newElement.innerHTML = liElement.innerText;

  ulElement.removeChild(liElement);
  doneUlElement.appendChild(newElement);
}
