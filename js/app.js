function isCircle() {
  jQuery(document).ready(function() {
    jQuery('.skillbar').each(function() {
      jQuery(this).find('.skillbar-bar').animate({
        width: jQuery(this).attr('data-percent')
      }, 6000);
    });
  });

  new Circlebar({
    element: "#circle-1",
    type: "progress",
    maxValue: "100",
  });

  new Circlebar({
    element: "#circle-2",
    type: "progress",
    maxValue: "90"
  });

  new Circlebar({
    element: "#circle-3",
    type: "progress",
    maxValue: "75"
  });

  new Circlebar({
    element: "#circle-4",
    type: "progress",
    maxValue: "70"
  });


};

$(document).ready(function() {
  $('#map_canvas').mapit();
});
