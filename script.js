window.onload = function() {

    var inputTask = document.getElementById("task-input");

    var addButton = document.getElementById("add");
    var taskList = document.getElementById("list-container");

    var count = document.getElementById("label");

    addButton.onclick = function() {

        var task = inputTask.value;

        var itemTask = document.createElement("li");

        itemTask.innerHTML = task;

        taskList.appendChild(itemTask);

        var del = document.createElement("button");

        del.innerHTML = "X";

        del.addEventListener("click", function() {
            taskList.removeChild(itemTask);
        });

        itemTask.appendChild(del);

        taskList.appendChild(itemTask);

        itemTask.addEventListener("click", function() {

            itemTask.style.textDecoration = "line-through";
        });

        del.style.marginLeft = "20px";

        itemTask.style.fontFamily = "cursive";

        del.style.padding = "2px";

        del.style.borderRadius = "8px";

        del.style.border = "1px solid black";

        del.style.position = "fixed";

        del.style.display = "block";

        del.style.margin = "auto";


        inputTask.value = "";

    };


}