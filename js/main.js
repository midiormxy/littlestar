/**
 * Created by ZY on 2016-08-15.
 */
var part_1=document.getElementById("content");
var part_2=document.getElementById("content-1");
var part_3=document.getElementById("content-2");
function zy(){
    part_1.style.display="block";
    part_2.style.display="none";
    part_3.style.display="none";
    document.getElementById("back").style.display="";
}
function zy_1(){
    part_1.style.display="none";
    part_2.style.display="block";
    part_3.style.display="none";
    document.getElementById("back").style.display="none";
}
function close(){
    document.getElementById("bg").style.display="none";
    part_3.style.display="none";
}
function baoming(){

    document.getElementById("bg").style.display="block";
    part_3.style.display="block";
    setTimeout("close()",2000)
}


