// add event listeners for anchor tags in the nav. When clicked, they should show the content for that page.
// add if statement that if the content is already showing when clicked, do nothing.

document.addEventListener('DOMContentLoaded', (Event) => {


document.getElementById('home').addEventListener('click', function(){ 
  if (document.getElementById('homeContent').className != 'shown') {
    document.getElementsByClassName('shown').className = 'hide';
    document.getElementById('homeContent').className = 'shown';
  }
});

document.getElementById('streaming').addEventListener('click', function(){ 
  if (document.getElementById('streamingContent').className != 'shown') {
    let elem = document.getElementsByClassName('shown');
    document.getElementsByClassName('shown').className = 'hide';
    document.getElementById('streamingContent').className = 'shown';
  }
});

document.getElementById('videos').addEventListener('click', function(){ 
  if (document.getElementById('videosContent').className != 'shown') {
    document.getElementsByClassName('shown').className = 'hide';
    document.getElementById('videosContent').className = 'shown';
  }
});

document.getElementById('community').addEventListener('click', function(){ 
  if (document.getElementById('communityContent').className != 'shown') {
    document.getElementsByClassName('shown').className = 'hide';
    document.getElementById('communityContent').className = 'shown';
  }
});

document.getElementById('branding').addEventListener('click', function(){ 
  if (document.getElementById('brandingContent').className != 'shown') {
    document.getElementsByClassName('shown').className = 'hide';
    document.getElementById('brandingContent').className = 'shown';
  }
});


});
//.addEventListener('click', function(){ alert('it worked!')});



