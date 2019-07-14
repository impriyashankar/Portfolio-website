document.addEventListener("DOMContentLoaded", function() {
  /*document.body.style.overflow = "hidden";

  document.getElementById("ques").style.display = "none";
  document.getElementById("nav-bar").style.display = "none";
  //document.getElementById('myNav').style.display='none';
  document.getElementById("navbar-small").style.display = "none";
  document.getElementById("navbar-hr").style.display = "none";*/

  $("#toolset").click(function() {
    $("#base").animate({ marginLeft: "30" });
  });

 // document.getElementById("smiley").style.visibility = "hidden";
  document.getElementById("scroll").style.visibility = "hidden";
  document.getElementById("km").addEventListener("click", function() {
    $(this).fadeOut();
    $("#ques").fadeIn(4000, function() {
      $("#temp-blk").fadeOut(1000, function() {
       // $("#smiley").css("visibility", "visible");
        $("#scroll").css("visibility", "visible");
        $("#nav-bar").fadeIn();
        $("#navbar-small").fadeIn();
        $("#navbar-hr").fadeIn();
        document.body.style.overflow = "auto";
      });
    });
  });
});

window.addEventListener("scroll", function() {
  $("#smiley").css("visibility", "hidden");
});

function showDesc(option) {
  //document.getElementById('toolxp').style.display = "none";
  var slides = document.getElementsByClassName("tool-exp");

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[option - 1].style.display = "block";
}
