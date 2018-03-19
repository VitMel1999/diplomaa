 var myList = document.getElementsByTagName("li");
    var i;
    for ( i = 0; i < myList.length; i++ ){
        var span = document.createElement("span");
        var cross = document.createTextNode("\u00D7");
        span.className = "removeListItem";
        span.appendChild(cross);
        myList[i].appendChild(span);
        
    }
    
    var removeListItem = document.getElementsByClassName("removeListItem");
    var i;
    for ( i = 0; i < removeListItem.length ; i++ ){
        removeListItem[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    
    
    var toDoList = document.querySelector("ul");
    toDoList.addEventListener("click", function(ev){
       if(ev.target.tagName === "LI"){
           ev.target.classList.toggle("completed");
       }
    }, false );

    
    function newListItem(){
        var li = document.createElement("li");
        var inputVal = document.getElementById("toDo").value;
        var p = document.createTextNode(inputVal);
        li.appendChild(p);
            if (inputVal === ""){
                alert("Вы ничего не ввели");
            }
            else{
                document.getElementById("toDoList").appendChild(li);
            }
        document.getElementById("toDo").value = "";
        var span = document.createElement("span");
        var cross = document.createTextNode("\u00D7");
        span.className = "removeListItem";
        span.appendChild(cross);
        li.appendChild(span);
        for (i = 0; i < removeListItem.length; i++){
            removeListItem[i].onclick = function(){
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
    }