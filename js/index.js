var plus = document.getElementById("plus");
var appendRef = document.getElementById("create");

plus.onclick = () => {
  var item = document.createElement("div");
  var term = document.createElement("div");
  var def = document.createElement("div");
  appendRef.append(item);
}