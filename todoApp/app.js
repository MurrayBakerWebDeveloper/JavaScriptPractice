document.getElementById("addItem").onclick = function () {
    var newItem = document.getElementById('inputField').value;
    var div = document.getElementById("todo");
    var button = document.createElement("button");
    button.className = "list-group-item";
    button.appendChild(document.createTextNode(newItem));
    div.appendChild(button);
    button.onclick = function(elem) {
        this.parentNode.removeChild(this);
    };
    document.getElementById('inputField').value = "";
};
