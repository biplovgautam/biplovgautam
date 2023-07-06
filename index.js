var header = document.getElementById("header1");

var navbarHeight = header.offsetHeight;
var lastScrollTop = 0;

window.onscroll = function() {scrollHide()};

function scrollHide() {
  var st = window.pageYOffset || document.documentElement.scrollTop;
  console.log(st);
  if (st > lastScrollTop) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }
  lastScrollTop = st <= 0 ? 0 : st;
}


let searchbtn = document.querySelector('.searchbtn');
let closebtn = document.querySelector('.closebtn');
let searchbox = document.querySelector('.searchbox');
let navigation = document.querySelector('.navigation');
let menulog = document.getElementById(".menulog1");
let header = document.getElementById(".header1");
searchbtn.onclick = function(){
  closebtn.classList.add('active');
  searchbox.classList.add('active');
  searchbtn.classList.add('active');
  menulog.classList.add('hide');
}
closebtn.onclick = function(){
  closebtn.classList.remove('active');
  searchbox.classList.remove('active');
  searchbtn.classList.remove('active');
  menulog.classList.remove('hide')
}
menulog.onclick = function(){
  header.classList.toggle('open');
  searchbox.classList.remove('active');
  searchbtn.classList.remove('active');
  menulog.classList.remove('hide')
}
