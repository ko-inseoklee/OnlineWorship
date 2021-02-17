var addBtn = "add-btn";
var delBtn = "del-btn";
var registBtn = "regist-btn";



function addFunction(){
    console.log("this is add.");
    var i = document.getElementById(addBtn);
    console.log(i);
    var cl = document.getElementById("add-att");
    var modelcontent = document.getElementById("modal--content");
    cl.className = "show-modal";

}



function delFunction(){
    console.log("this is delete.");
    var i = document.getElementById(delBtn);
    console.log(i);
    console.log(window.innerHeight);
    console.log(window.innerWidth);
}

function regisFunction(){
    console.log("this is registration.");
    var i = document.getElementById(registBtn);
    console.log(i);
}

function backButton(){
    document.getElementById("add-att").className = "modal";
}
