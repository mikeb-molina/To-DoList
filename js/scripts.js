function newItem(){
    //to add new item to list
    let li = $("<li></li>");
    let inputValue = $("#input").val();
    li.append(inputValue);

    if (inputValue === ''){
        alert("You must write something!");
    }else{
        $('#list').append(li);
    }

    //to cross out itemm from list
    function crossOut() {
        li.toggleClass("strike");
    }

    li.on("dblClick", function crossOut() {li.toggleClass("strike")});


    // add delete button "X"
    let crossOutButton= $('<crossOutButton><?crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);
    function deleteListItem(){
        li.addClass("delete")
    }

    //Reorder list items
    $('#list').sortable();
    
}