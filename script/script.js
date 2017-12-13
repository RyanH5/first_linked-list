var submitBtn = document.querySelector('#web-submit');
var titleFld = document.querySelector('#web-title');
var urlFld = document.querySelector('#web-url');
var displayTitle = document.querySelector('#site-title'); // Can delete after dynamic is 100%
var bookmarkUl = document.querySelector('#bookmark-ul-id');
var readBtn = document.querySelector('#site-read');
var deleteBtn = document.querySelector('#site-delete');
var errorMessage = document.querySelector('#error');
var readCountDisplay = document.querySelector('#read-display');

submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  var newTitle = titleFld.value;
  var newUrl = urlFld.value;
  var siteLi = document.createElement('li');
  siteLi.className = 'site-info-li';
  siteLi.innerHTML = "<h2 class='site-title'>" + newTitle + 
    "</h2><hr id='top-site-break'><a href=" + newUrl + 
    "target='_blank' alt='#'>" + newUrl +
    "</a><hr id='bottom-site-break'><button class='site-btn' id='site-read'>Read</button><button class='site-btn delete-count' id='site-delete'>Delete</button>"
  bookmarkUl.appendChild(siteLi);
  readCountDisplay.innerText = '';
  deleteCount();
})


$('ul').on('click', '#site-read', function(event) {
    $(this).toggleClass('read');
    $(this).closest('li').addClass('readli');
    readCount();
});

$('ul').on('click', '#site-delete', function(event) {
  $(this).closest('li').fadeOut(function() {
    $(this).remove();
    deleteCount();
    readCount();
  });
});

urlFld.addEventListener('keyup', function() {
  if (titleFld.value === '' || urlFld.value === '') {
    submitBtn.disabled = true;
    errorMessage.innerText = "Please fill out both fields";
  } else {
    submitBtn.disabled = false;
    errorMessage.innerText = "";
  }
  checkMeNow();
});

function checkMeNow() {
    var check = urlFld.value;
    var x = check.includes('.com' || '.org' || '.edu' || '.gov' || '.io' || '.ca' || '.uk');
    if (x === false) {
      submitBtn.disabled = true;
    } else {
      submitBtn.disabled = false;
    }  
};

titleFld.addEventListener('keyup', function() {
  if (titleFld.value === '' || urlFld.value === '') {
    submitBtn.disabled = true;
    errorMessage.innerText = "Please fill out both fields";
  } else {
    submitBtn.disabled = false;
    errorMessage.innerText = "";
  }  
});

function deleteCount() {
  var deleteNum = $(".delete-count").length;
    for (var i = deleteNum.length; i >= 0; i--) {
      deleteNum = deleteNum[i]; 
    }
  errorMessage.innerText = deleteNum + " Bookmarks to Read";
}

function readCount() {
  var readNum = $(".read").length;
    for (var i = 0; i < readNum.length; i++) {
      readNum = readNum[i];
    }
  readCountDisplay.innerText = readNum + " Bookmarks are Read";
}




