$(document).ready(function(){
    
    $("#divninja0").hide();
    $("#divninja1").hide();
    $("#divninja2").hide();
    $("#divninja3").hide();
    $("#divninja4").hide();
    $("#divcat0").click(function(){
        $("#divcat0").hide();
        $("#divninja0").show();
    })
    $("#divninja0").click(function(){
        $("#divninja0").hide();
        $("#divcat0").show();
    })
    $("#divcat1").click(function(){
        $("#divcat1").hide();
        $("#divninja1").show();
    })
    $("#divninja1").click(function(){
        $("#divninja1").hide();
        $("#divcat1").show();
    })
    $("#divcat2").click(function(){
        $("#divcat2").hide();
        $("#divninja2").show();
    })
    $("#divninja2").click(function(){
        $("#divninja2").hide();
        $("#divcat2").show();
    })
    $("#divcat3").click(function(){
        $("#divcat3").hide();
        $("#divninja3").show();
    })
    $("#divninja3").click(function(){
        $("#divninja3").hide();
        $("#divcat3").show();
    })
    $("#divcat4").click(function(){
        $("#divcat4").hide();
        $("#divninja4").show();
    })
    $("#divninja4").click(function(){
        $("#divninja4").hide();
        $("#divcat4").show();
    })
})