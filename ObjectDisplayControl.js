
function showObject(){

  var numberOfDisplay = document.getElementById("objectTable").rows.length;

  var displayObject = document.getElementById("object").value;
  var statement = document.createElement("div");
  statement.setAttribute("id", "object"+numberOfDisplay);
  document.getElementById("equationBox").appendChild(statement);

  var el = document.getElementById("object"+numberOfDisplay);
  el.style.fontSize = "35px";
  el.style.position = "absolute";
  el.innerHTML = "$" +  displayObject + "$";
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, el]);
  dragElement(document.getElementById("object" + numberOfDisplay));
}

function clearAllObject(){
  document.getElementById("equationBox").innerHTML = "";
  document.getElementById("objectTable").getElementsByTagName('tbody')[0].remove();
  $("<tbody>").appendTo($("#objectTable"));
}

function addObjectInfoToTable(){

  showObject();

  var table = document.getElementById("objectTable");
  var tableRef = table.getElementsByTagName('tbody')[0];
  var newRow   = tableRef.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);

  cell1.innerHTML="$" + $("#object").val() + "$";

  $("<div>").attr({
    id: "sizeDiv" + (table.rows.length - 1),
    class: "ui input",
  }).width(100).appendTo(cell2);

  $("<input>").attr({
    id: "size" + (table.rows.length - 1),
    type: 'text',
    size: '8',
    value: 35,
  }).appendTo(document.getElementById("sizeDiv" + (table.rows.length - 1)));

  $("<input>").attr({
    id: "color" + (table.rows.length - 1),
    type: 'color',
    value: "#000000",
  }).width(50).appendTo(cell3);

  $('#color'+(table.rows.length - 1)).kendoColorPicker();


  $("<button>").attr({
    id: "objectEditBtn" + (table.rows.length - 1),
    class: 'small ui button',
    onclick: "editObject(number)".replace("number", table.rows.length - 1),
  }).html("Edit").width(100).appendTo(cell4);

  MathJax.Hub.Queue(["Typeset", MathJax.Hub, table.rows[1].cells[0].innerHTML]);
}

function editObject(n){
  console.log(n);
  document.getElementById("object"+n).style.fontSize = document.getElementById("size" + n).value + "px";
  document.getElementById("object"+n).style.color = document.getElementById("color" + n).value;
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
