init_navigation = function() {
  $("#sidebar-toggler").click(function (e) {
    $("body").toggleClass("sidebar-open");
  });
  $(window).resize(function() { 
    if($(this).width() > 769) {
      $("body").addClass("sidebar-open");
    } else {
      $("body").removeClass("sidebar-open");
    }
  })
} 