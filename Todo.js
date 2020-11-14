// const todoFunction = () => {

//     let todo = document.getElementById("todoVal").value;


//     console.log(todo, "hello todo");


// }

var myTodoList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myTodoList.length; i++) {
    var span = document.createElement("SPAN");
    var closeX = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(closeX);
    myTodoList[i].appendChild(span);

}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onClick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);


function todoFunction() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("todoVal").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("oh no what are you doing!");
    } else {
        document.getElementById("theList").appendChild(li);
    }
    document.getElementById("todoVal").value = "";
    var span = document.createTextNode("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(closeX);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    console.log("hello")

    // let todoValue = document.querySelector()

}