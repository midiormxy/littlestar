/**
 * Created by ZY on 2016-08-17.
 */
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
function close() {
    $('#bg').fadeOut();
    $('#content-2').fadeOut();
}
$(document).ready(function(){
    $("#fabiao-1").click(function(){
        htmlobj=$.ajax({url:"/jquery/test.txt",async:false});
        $("#myDiv").html(htmlobj.responseText);
        $("#bg").fadeIn(1000);
        $("#content-2").fadeIn(1000);
        setTimeout(" close()", 2000)
    });

});
$(function(){
    $("#header-content a").click(function(){
        $("#header-content a").eq($(this).index()).addClass("first").siblings().removeClass("first");
    })
})



