   
        
        $(".items").hover(function(){
          $(this).parent().parent().children(":first-child").css({"background-color": "#2C2D30", "color": "white","border-radius":"18px"});
          
          $(".items").mouseleave(function(){
              $(this).parent().parent().children(":first-child").css({"background-color": "white", "color": "#2C2D30"});
              
          });
          
      })
      
      $(function(){
$(".active a").css("background-color","#D3D3D3");
      });
      


$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
$("#carousel-example-2").mouseover(function(){
  $("ol").show();
  });
  $("#carousel-example-2").mouseleave(function(){
  $("ol").hide();
  });
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  

