$(document).ready(function() {

    $(".list").on("click", ".list-item", function() {
        if ($(this).hasClass("checked-item")) {
            $(this).removeClass("checked-item");
        }
        else {
            $(this).addClass("checked-item");
        }
        
    })

    $("form").on("submit", function(e){
        e.preventDefault();
        let task = $("#task").val();
        let listItem = `<li class="list-item"> ${task} </li>`;
        $(listItem).appendTo("ul");
        $("#task").val("");
    })

})