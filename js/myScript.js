var userName="";
var title="";
var interest="";

$(document).ready(function(){
  $("form#F1").fadeIn(800);

  $("form#F1").submit(function(event){
    title=$("input[name=title]").val();
    userName=$("input[name=userName]").val();
    $("form#F1").hide();
    $("form#F2").fadeIn(800);
    event.preventDefault();
  });
  $("form#F2").submit(function(event){
    interest=$("input[name=medium]").val();
    $("form#F2").hide();
    $("form#F3").fadeIn(800);
    event.preventDefault();
  });
  $("form#F3").submit(function(event){
    event.preventDefault();
  });
  
});
