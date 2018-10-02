var userName;
var title;
var interest;
var frontEnd;
var backEnd;

$(document).ready(function(){
  $("form#F1").fadeIn(1000);

  $("form#F1").submit(function(event){
    event.preventDefault();

    title=$("input[name=title]").val();
    userName=$("input[name=userName]").val();
    $("form#F1").hide();
    $("form#F2").fadeIn(1000);
  });

  $("form#F2").submit(function(event){
    event.preventDefault();

    interest=$("input[name=medium]:checked").val();
    $("form#F2").hide();
    $("form#F3").fadeIn(1000);
  });

  $("form#F3").submit(function(event){
    event.preventDefault();

    frontEnd = ( $("input[name=front-end]:checked").val() === "1" );
    $("form#F3").hide();
    $("form#F4").fadeIn(1000);
  });

  $("form#F4").submit(function(event){
    event.preventDefault();

    backEnd  = ( $("input[name=back-end]:checked").val() === "1" );
    $("form#F4").hide();

    // web
    if (interest==="1") {
      if (frontEnd) {
        $("ul#RESULT-LIST").prepend("<li>HTML</li><li>CSS</li><li>Bootstrap</li><li>Sass</li><br>");
      }
      if (backEnd) {
        $("ul#RESULT-LIST").prepend("<li>Javascript/ECMA script</li><li>PHP</li><li>Ruby</li><br>");
      }
    }
    // app
    if(interest==="2") {
      if (frontEnd) {
        $("ul#RESULT-LIST").prepend("<li>Java</li><br>");
      }
      if (backEnd) {
        $("ul#RESULT-LIST").prepend("<li>C++</li><li>C#</li><li>.NET</li><li>SQL</li><br>");
      }
    }
    // mobile
    if (interest==="3") {
      if (frontEnd) {
        $("ul#RESULT-LIST").prepend("<li>Java</li><li>Python</li><br>");
      }
      if (backEnd) {
        $("ul#RESULT-LIST").prepend("<li>Java</li><br>");
      }
    }

    if( $("ul#RESULT-LIST").length ) {
      $("#RESULT-BOX p").text("Might I suggest a carrer in marketing?");
    }
      $("#RESULT-BOX,#RESULT-BOX>*").fadeIn(1000);
  });

});
