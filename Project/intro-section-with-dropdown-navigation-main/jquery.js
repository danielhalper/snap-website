$(document).ready(function() {

  if ($(window).width() < 1000) {
    console.log("thin");
    $('.hero').attr("src","images/image-hero-mobile.png");
    $('.navbar').hide();
 }


 $('.close').toggle();

  $('.navbar-mobile').toggle();

 $(this).find('.dropdown-content-mobile').toggle("fast", function() {
    
});
 console.log("load")

 $('.feat').on("click",
 function() {
   $(this).find('.dropdown-content-mobile').toggle("fast", function() {
    
  });
 }
)

$('.comp').on("click",
function() {

  $(this).find('.dropdown-content-mobile').toggle("fast", function() {

  });
} 
)



  
 $('.feat').on("mouseover",
  function() {
    $('#features').attr("src","images/icon-arrow-down.svg");
  }

 )

 $('.feat').on("mouseout",
 function() {
   console.log("switch");
   $('#features').attr("src","images/icon-arrow-up.svg");
 })

 $('.comp').on("mouseover",
  function() {
    $('#company').attr("src","images/icon-arrow-down.svg");
  })

 $('.comp').on("mouseout",
 function() {
   console.log("switch");
   $('#company').attr("src","images/icon-arrow-up.svg");
 }

)


$('.close').on("click",
function() {
  $('.navbar-mobile').toggle("fast", function() {
    
  });
  $('.menu').toggle();


  $('.close').toggle();


}
)

$('.menu').on("click",
function() {
  $('.navbar-mobile').toggle("fast", function() {
    
  });
  $('.menu').toggle();


  $('.close').toggle();


}
)


})