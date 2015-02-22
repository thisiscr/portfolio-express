var alsoenlarge = true;
$(function(){
  if(isScalePossible()){
    $('body').css({overflow:'hidden'});
    $('#scalecontainer').css({position: 'absolute', margin: 0});

            // Run scale function on start
            scaleSite();

            // Run scale function on browser resize
            $(window).resize(scaleSite);
  }
});

function scaleSite() {
  containerw = window.innerWidth; /* The width of the div, currently set to half of the window's width */
  containerh = 600; /* The maximum possible height of the div; the recommend size for this is equal to or larger than the H of the element. */
  sitew = $('#scalecontainer').width();
  siteh = $('#scalecontainer').height();
  f = containerw/sitew;
  f = containerh/siteh<f?containerh/siteh:f;
  if(!alsoenlarge && f>1) f = 1;
  $('#scalecontainer').css({
    "-moz-transform"    : "scale("+f+")",
    "-webkit-transform" : "scale("+f+")",
    "-ms-transform"     : "scale("+f+")",
    "-o-transform"      : "scale("+f+")",
    "transform"         : "scale("+f+")",
    "left"              : ((containerw-(sitew*f))/2)+"px",
    "top"               : ((containerh-(siteh*f))/2)+"px",
  });
}

function isScalePossible() {
  can = 'MozTransform' in document.body.style;
  if(!can) can = 'webkitTransform' in document.body.style;
  if(!can) can = 'msTransform' in document.body.style;
  if(!can) can = 'OTransform' in document.body.style;
  if(!can) can = 'transform' in document.body.style;
  if(!can) can = 'Transform' in document.body.style;
  return can;
}