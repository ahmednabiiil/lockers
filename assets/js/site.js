$(document).ready(function () {
  // Photo Gallery
  const photoGallery = $(".photo__gallery");
  if (photoGallery.length > 0) {
    photoGallery.lightGallery({
      selector: ".photo__item",
    });
  }

  //SVG converter
  const svgConverter = function () {
    $("img.svg").each(function () {
      var $img = jQuery(this);
      var imgID = $img.attr("id");
      var imgClass = $img.attr("class");
      var imgURL = $img.attr("src");
      jQuery.get(
        imgURL,
        function (data) {
          var $svg = jQuery(data).find("svg");
          if (typeof imgID !== "undefined") {
            $svg = $svg.attr("id", imgID);
          }
          if (typeof imgClass !== "undefined") {
            $svg = $svg
              .attr("class", imgClass + " replaced-svg")
              .css("display", "inline-block");
          }
          $svg = $svg.removeAttr("xmlns:a");
          $img.replaceWith($svg);
        },
        "xml"
      );
    });
  };
  svgConverter();

  $(".numCounter").counterUp({
    delay: 10,
    time: 1000,
  });
});
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 80) {
    $(".menu").addClass("nav-active");
  } else {
    $(".menu").removeClass("nav-active");
  }
});
