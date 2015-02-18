// TODO: As per interview suggestion, Refactor and improve this code. Most of it can be removed with better centering
// principles. Might as well do this after picking up backbone.

$(function () {
  dynamics();
  });

var $window = $(window);
var timeout;
$window.resize(function () {
  clearTimeout(timeout);
  timeout = setTimeout(function () {
                dynamics();
              }, 250);
});

function getWindowWidth() {
  return window.innerWidth ? window.innerWidth : $window.width();
}

function dynamics() {
  //center various elements dynamically
  // var tl = document.getElementById('topLeftHolder');
  // tl.style.marginLeft = (-1*(tl.offsetWidth/2))+'px';

  var sub = document.getElementById('sub');
  sub.style.marginLeft = (-1*(sub.offsetWidth/2))+'px';

  var tp = document.getElementById('top');
  tp.style.marginLeft = (-1*(tp.offsetWidth/2))+'px';

  var ft = document.getElementById('footerFormat');
  ft.style.marginLeft = (-1*(ft.offsetWidth/2))+'px';

  var sr = document.getElementById('subRes');
  sr.style.marginLeft = (-1*(sr.offsetWidth/2))+'px';

  var tr = document.getElementById('topRes');
  tr.style.marginLeft = (-1*(tr.offsetWidth/2))+'px';

  var cf = document.getElementById('cform');
  if (cf) {cf.style.marginLeft = (-1*(cf.offsetWidth/2))+'px';}

  var ms = document.getElementById('message');
  if (ms) {
    var d = $('#footer').offset().top - $('#whiteContainer').offset().top;
    d = .4*d;
    ms.style.height = d+"px";
  }

  var hs = document.getElementById('headshot');
  if (hs) {
    var h = document.getElementById('aboutTxt').offsetHeight;
    h = .90*h;
    hs.style.height = h+"px";
  }

  //dynamic repositioning of sc central lights
  var sc = document.getElementById('soundcloudvizlights_hype_container');
  var scBottom = $('#footer').offset().top - $('#whiteContainer').offset().top - 134;
  sc.style.bottom = scBottom+"px";

  //reposition current stats bars dynamically
  var t = document.getElementById('tech');
  var v = document.getElementById('vis');
  var a = document.getElementById('aud');
  var th = t.offsetHeight;
  var vh = v.offsetHeight;
  var ah = a.offsetHeight;
  v.style.marginTop = (th - vh)+'px';
  a.style.marginTop = (th - ah)+'px';

  //resize juicebox gallery
  try {
    if (jb) {
      $dis = $('#footer').offset().top - $('.navbar-inverse').offset().top;
      console.log('distance: '+$dis);
      jb.setGallerySize(getWindowWidth(), ($dis-50));
    }
  } catch(err) {
    console.log(err.message+" - This is fine.");
  }

}