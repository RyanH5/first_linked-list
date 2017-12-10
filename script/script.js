window.onload = function () {
 
var submitBtn = document.querySelector('#web-submit');
var titleFld = document.querySelector('#web-title');
var urlFld = document.querySelector('#web-url');
var displayTitle = document.querySelector('#site-title');
var displayUrl = document.querySelector('#web-url');
var bookmarkUl = document.querySelector('#bookmark-ul-id');

submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  var newTitle = titleFld.value;
  var newUrl = urlFld.value;
  var siteLi = document.createElement('li');
  siteLi.className = 'site-info-li';
  siteLi.innerHTML = "<h2 class='site-title'>" + newTitle + 
    "</h2><hr id='top-site-break'><a href=" + newUrl + 
    "target='_blank' alt='#'>" + newUrl +
    "</a><hr id='bottom-site-break'><button class='site-btn' id='site-read'>Read</button><button class='site-btn' id='site-delete'>Delete</button>"
  bookmarkUl.appendChild(siteLi);
})



};



