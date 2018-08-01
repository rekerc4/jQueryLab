"use strict";

let toggle = null; 
let resArr = {};
let tableNum = 0;



$(document).ready(function () {

    let carryData = undefined;
    let currentT = undefined; 

function registerEventHandlers(){
    $("body").on("click", "#tables .table", (e) => {
        let eyeD = $(e.target).attr("id");
        // $("body").on("mouseenter mouseleave", "#tables .table", function(){
        //     console.log($(carryData).data("name"));
        // })
        console.log(e); 
       
        
        currentT = e.currentTarget.id;

       
       
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
       
        $("#name").removeClass("reserve");
        $("#form").toggleClass("hidden");
        $("#form").fadeTo(2000, 0.0);
        $("#tables").click(function(e){
            console.log($(carryData).data("num"));
        })
        
    });

    $("#save").click(function(e){
        console.log(currentT); 
        carryData = $(e.target);
        carryData.data("name", $("#name").val()); 
        carryData.data("num", $("#numSelect").val());
        $("#form").fadeTo(2000, 0.0);
        $("#form").toggleClass("hidden");
        let theTable = "#table" + tableNum;
        $(theTable).toggleClass("reserved");
        newMOver();
     });

    let newMOver = (target) => {
        let cId = "#" + currentT;
        let na = carryData.data("name");
        let nu = carryData.data("num");
        $(cId).mouseover(function(){
            console.log(typeof na);
            console.log(nu);
        })

        $(cId).mouseleave(function(){
            console.log(na);
            console.log(typeof nu);
        })
           console.log(currentT);
    }
  
    // $("body").on("click", "#tables .table p", (e) => {
    //     console.log($(e.target));
    //     let d = $(e.target).parent();
    //     console.log(d);
    // })
}

function checkIfToggle(check){
    let theCheck = "#" + check; 
    let res = $(theCheck).hasClass("reserve");
    return res;
}

function showForm(eyeD, rese){


    let theNum = parseInt(eyeD.replace(/\D/g,''));
    tableNum = theNum; 

    if(rese === true){

    }
    else{
        $("#form").toggleClass("hidden");
        $("#form").fadeTo(2000, 1.0);
        $("#table-num-label").children("p").eq(0).remove();
        $("#table-num-label").append(`<p class="inline" id="theNum">${theNum}</p>`);
    }
    
}

registerEventHandlers();

});