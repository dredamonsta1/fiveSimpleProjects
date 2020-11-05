const todoFunction = () => {
    // const todo = document.getElementsByClassName("todo")
    let todo = document.getElementById("todoVal").value;
    // let displayVal = document.querySelector

    let myTodoList = document.getElementsByTagName("LI");
    let i;
    for (i = 0; i < myTodoList.length; i++) {
        let span = document.createElement("SPAN");
        let closeX = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(closeX);
        myTodoList[i].appendChild(span);
    }


    console.log(todo, "hello todo");
}







const showValueFunction = () => {
    let todoValue = document.querySelector()

}