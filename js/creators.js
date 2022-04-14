// add event listeners for anchor tags in the nav. When clicked, they should show the content for that page.
// add if statement that if the content is already showing when clicked, do nothing.


// Get array of all nav p's. When one is clicked, set all to hide except the clicked one.
let pages = document.getElementsByClassName('menuItem');
let contents = document.getElementsByTagName('section');

// to show the home content
pages[0].addEventListener('click', function(){
  for (let i = 0; i < pages.length; i++) {
    contents[i].className = 'hide';
  }
  contents[0].className = '';
});
// to show the Live Streaming content
pages[1].addEventListener('click', function(){
  for (let i = 0; i < pages.length; i++) {
    contents[i].className = 'hide';
  }
  contents[1].className = '';
});
// to show the Videos content
pages[2].addEventListener('click', function(){
  for (let i = 0; i < pages.length; i++) {
    contents[i].className = 'hide';
  }
  contents[2].className = '';
});
// to show the community content
pages[3].addEventListener('click', function(){
  for (let i = 0; i < pages.length; i++) {
    contents[i].className = 'hide';
  }
  contents[3].className = '';
});
// to show the branding content
pages[4].addEventListener('click', function(){
  for (let i = 0; i < pages.length; i++) {
    contents[i].className = 'hide';
  }
  contents[4].className = '';
});
pages[5].addEventListener('click', function(){
  for (let i = 0; i < pages.length; i++) {
    contents[i].className = 'hide';
  }
  contents[5].className = '';
});

// Toggle Theme Button functionality here
let themeSheet = '<link id="theme" rel="stylesheet" href="theme.css">'

let bool = false;

$("#toggle").click(function(){
  console.log("Clicked");
  // check if theme.css is in head
  if (bool) {
    console.log("sheet is in html");
    $("#theme").remove();
    bool = false;
  } else {
    console.log("sheet is not in html");
    $("#baseStyling").after(themeSheet);
    bool = true;
  }
});