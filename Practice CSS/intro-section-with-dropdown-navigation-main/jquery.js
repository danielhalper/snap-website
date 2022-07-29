$(document).ready(function() {

  if ($(window).width() < 1000) {
    console.log("thin");
    $('.hero').attr("src","images/image-hero-mobile.png");
 }
  
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
})