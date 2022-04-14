// add event listeners for anchor tags in the nav. When clicked, they should show the content for that page.
// add if statement that if the content is already showing when clicked, do nothing.


// Get array of all nav p's. When one is clicked, set all to hide except the clicked one.
let pages = document.getElementsByClassName('menuItem');
let contents = document.getElementsByTagName('section');

// to show the home content
$('.home').click(function(){
  $('.content').hide();
  $('#homeContent').show();
});

// to show the Live Streaming content
$('.streaming').click(function(){
  $('.content').hide();
  $('#streamingContent').show();
});

// to show the Videos content
$('.videos').click(function(){
  $('.content').hide();
  $('#videosContent').show();
});

// to show the community content
$('.community').click(function(){
  $('.content').hide();
  $('#communityContent').show();
});

// to show the branding content
$('.branding').click(function(){
  $('.content').hide();
  $('#brandingContent').show();
});

// to show the visitor log
$('.visitor-log').click(function(){
  $('.content').hide();
  $('#log-visit').show();
});


// Toggle Theme Button functionality here
let themeSheet = '<link id="theme" rel="stylesheet" href="theme.css">'

let bool = false;

$("#toggle").click(function(){
  console.log("Clicked");
  // check if theme.css is in head
  if (bool) {
    $("#theme").remove();
    bool = false;
  } else {
    $("#baseStyling").after(themeSheet);
    bool = true;
  }
});