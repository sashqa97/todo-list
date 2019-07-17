function toggleItem(element) {


  if (element.className === "done") {
    element.className = ""; 
  }  
  else {
      element.className = "done";
  }    
    
}

function addElement() {
  var newItemText = document.getElementById("new-item").value;

  var newItem = document.createElement("LI");

  newItem.innerHTML = newItemText;


  document.getElementById("todo-list").appendChild(newItem);


  console.log(newItemText);
}
