$(document).ready(function() {  


  //////// Waypoint //////////

  var waypoint = new Waypoint({
    element: $('#about'),
    handler: function(direction) {
      if (direction === "down") {
        $('#nav-about').css("color", "#52BECC");
        $('#nav').css("background-color", "#2F4C69");
      }
      else {
        $('#nav-about').css("color", "white");
        $('#nav-web').css("color", "white");
        $('#nav').css("background-color", "transparent");
      }
    } 
  });

  var waypoint = new Waypoint({
    element: $('#web'),
    handler: function(direction) {
      if (direction === "down") {
        $('#nav-web').css("color", "#52BECC");
        $('#nav-about').css("color", "white");     
      }
      else {
        $('#nav-about').css("color", "#52BECC");
        $('#nav-web').css("color", "white");
      }
    }
  });

var waypoint = new Waypoint({
    element: $('#music'),
    handler: function(direction) {
      if (direction === "down") {
        $('#nav-music').css("color", "#52BECC");
        $('#nav-connect').css("color", "white");
        $('#nav-web').css("color", "white");

      }
      else {
        $('#nav-music').css("color", "white");
        $('#nav-web').css("color", "#52BECC");

      }
    }
  });

var waypoint = new Waypoint({
    element: $('#connect'),
    handler: function(direction) {
      if (direction === "down") {
        $('#nav-connect').css("color", "#52BECC");
        $('#nav-music').css("color", "white");
      }
      else {
        $('#nav-connect').css("color", "white");
        $('#nav-music').css("color", "#52BECC");
      }
    }
  });


////////// Progress Bar /////////

var winHeight = $(window).height(),
  docHeight = $('body').height();
  max = docHeight - winHeight;

$('progress').attr('max', max);

var value = $(window).scrollTop();
$('progress').attr('value', value);

$(document).on('ready', function() {  
  var winHeight = $(window).height(), 
      docHeight = $(document).height(),
      progressBar = $('progress'),
      max, value;

  /* Set the max scrollable area */
  max = docHeight - winHeight;
  progressBar.attr('max', max);

  $(document).on('scroll', function(){
     value = $(window).scrollTop();
     progressBar.attr('value', value);
  });
});


});