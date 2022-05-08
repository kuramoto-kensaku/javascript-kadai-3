"use strict";
/* global $*/
$(document).ready(function(){
  
  $("#search-text").keyup(function(){
    
    let searchArea = $("#search-text").val();
    
    $(".target-area .target-item").each(function(){
      
      let val = $(this).text();
      
      if (val.match(searchArea)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    })
    
  })
  
})