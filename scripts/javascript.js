$(document).ready(function () {

function registerEventHandlers(){
    $("body").on("click", "#tables .table", (e) => {
        console.log($(e.target));
        console.log($(e.target.nodeName));
        console.log($(e.target).hasClass(".reserved"));
        if($(e.nodeName) === "P"){

        }
        else{
        $(e.target).toggleClass("reserved");
        }
    });

    // $("body").on("click", "#tables .table p", (e) => {
    //     console.log($(e.target));
    //     let d = $(e.target).parent();
    //     console.log(d);
    // })
}

function showForm(){
    $("#form")
}

registerEventHandlers();

});