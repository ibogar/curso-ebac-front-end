$(document).ready(function() {

    $("form").on("submit", function(e){
        e.preventDefault();
        let task = $("#task").val();
        let listItem = `<li class="list-item"> ${task} </li>`;
        $(listItem).appendTo("ul");
        $("#task").val("");
    
        $(".list-item").on("click", function() {
            if ($(this).hasClass("checked-item")) {
                $(this).removeClass("checked-item");
            }
            else {
                $(this).addClass("checked-item");
            }
            
        })
    })


})