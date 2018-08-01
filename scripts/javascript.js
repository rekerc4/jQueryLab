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
        shake();
        carryData = $(e.target);
        carryData.data("name", $("#name").val()); 
        carryData.data("num", $("#numSelect").val());
        $("#form").fadeTo(2000, 0.0);
        
        let theTable = "#table" + tableNum;
        $(theTable).toggleClass("reserved");
        newMOver();
     });

    let newMOver = (target) => {
        let cId = "#" + currentT;
        let na = carryData.data("name");
        let nu = carryData.data("num");
        let numer = "<p> Name : " + nu + "</p>";
        let nama = "<p> Size of Party : " + na + "</p>"; 
        $(cId).children("div").eq(0).append(nama);
        $(cId).children("div").eq(0).append(numer);
        console.log(cId);

        $("body").on("mouseover mouseleave", `${cId}, ${cId} > div`, (e) =>{
            $(cId).children("div").eq(0).toggleClass("hidden");
            $(cId).children("div").eq(0).toggleClass("not-visible");
        })
         
    }

    function shake(){
        $("#save").toggleClass("pause")
        setTimeout(function(){ 
        $("#save").toggleClass("pause");
        $("#form").toggleClass("hidden");
     }, 1000);
        
        
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