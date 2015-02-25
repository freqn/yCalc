

$(document).ready(function(){
  $("input").on("keyup",function(){

    var quant = +$("#quantity").val();
    var invest = +$("#investment").val();
    var sale = +$("#sale").val();
    var ship = +$("#shipping").val();
    var total = (quant*sale) - (quant*invest);

    $("#gross").text("$" + total );
    var grossNet = $("#grossAmt, #netAmt");
    if (total < 0 || (total <= 0 && ship > 0)) {
      $("#grossLabel p").text("Debt");
      grossNet.css("background-color","red");
    } else {
      grossNet.css("background-color","#FFA500").find("p").css("color","#000");
      $("#grossLabel p").text("Gross");
    };

    $("#shipAmt").text ("$" + ship);

    if (invest > 0){
      $("#invested").text("$" + invest * quant);
    } else {
      $("#invested").text("$" + invest);
    };

    if (ship > 0){
      $("#net").text("$" + (total - ship));
      $("#shipped").show();
    } else {
      $("#net").text("$" + total);
      $("#shipped").hide();
    };

    if ( quant > 0 || invest > 0 || sale > 0 || ship > 0) {
    };
  });
});
