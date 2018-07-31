$(document).ready(function () {

function registerEventHandlers(){
    $("body").on("click", "#tables .table", (e) => {
        console.log($(e));
        let eyeD = $(e.target).attr("id");
        console.log(eyeD);
        console.log($(e.target).parent().attr("id"));
        if(eyeD === undefined){
           let pcId =  $(e.target).parent().attr("id");
           let rese = checkIfToggle(pcId);
           $(e.target).parent().toggleClass("reserve");
           showForm(pcId, rese); 
        }
        else{
            let reserve = checkIfToggle(eyeD);
            $(e.target).toggleClass("reserve");
            showForm(eyeD, reserve);
        }
       
    });

    $("#exit").click(function(){
        $("#form").toggleClass("hidden");
        $("#form").css("opacity", 0.0);
    });

    $("#save").click(function(){
        $("#form").css("opacity", 0.0);
        $("#form").toggleClass("hidden");
        let r = $("#table-num-label").text().replace(/\D/g,'');
        let iden = "#table" + r;
        $(iden).toggleClass("reserved");
    });

    // $("body").on("click", "#tables .table p", (e) => {
    //     console.log($(e.target));
    //     let d = $(e.target).parent();
    //     console.log(d);
    // })
}

function checkIfToggle(check){
    let theCheck = "#" + check; 
    let res = $(theCheck).hasClass("reserved");
    console.log(res);
    return res;
}

function showForm(eyeD, rese){
    console.log(rese); 

    let theNum = parseInt(eyeD.replace(/\D/g,''));
    console.log(theNum);
    if(rese === true){

    }
    else{
        $("#form").toggleClass("hidden");
        $("#form").fadeTo(2000, 1.0);
        $("#table-num-label").append(theNum);
    }
    
}

registerEventHandlers();

});