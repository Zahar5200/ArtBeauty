"use strict";

var markerBtn = document.querySelector('.marker-btn');
var textArea = document.querySelector('.community__about-text');
markerBtn.addEventListener('click', function () {
  console.log('click');
  textArea.focus();
});
/*
    chat
*/

var chatLink = document.querySelectorAll('.chat__link');
var chatList = document.querySelector('.chat__list');
var chatTitle = document.querySelector('.chat__title');
var chatItem = document.querySelectorAll('.chat__inner');
var chatExit = document.querySelectorAll('.chat__el-btn');

for (var s = 0; s < chatExit.length; s++) {
  chatExit[s].addEventListener('click', ExitChat);
}

function ExitChat() {
  for (var a = 0; a < chatExit.length; a++) {
    chatItem[a].classList.add('chat__inner-hidden');
    chatItem[a].classList.remove('chat__inner-active');
  }

  chatList.classList.remove('chat__list-hidden');
  chatList.classList.add('chat__list-active');
  chatTitle.style.display = 'block';
}

for (var k = 0; k < chatLink.length; k++) {
  chatItem[k].classList.add('chat__inner-hidden');
  chatItem[k].classList.remove('chat__inner-active');
  chatLink[k].addEventListener('click', ChatLinkClick);
}

function ChatLinkClick(e) {
  chatTitle.style.display = 'none';
  chatList.classList.add('chat__list-hidden');
  chatList.classList.remove('chat__list-active');
  e.preventDefault();

  if (e.target === chatList) {} else {
    var activeEl = e.target.id;
    chatItem[activeEl].classList.add('chat__inner-active');
    chatItem[activeEl].classList.remove('chat__inner-hidden');
  }
}