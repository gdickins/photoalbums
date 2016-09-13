
var album1 = $('.album1');
var album2 = $('.album2');
var album3 = $('.album3');
var album4 = $('.album4');
var album5 = $('.album5');
var album6 = $('.album6');

var albumOne = $('.dogs');
var albumTwo = $('.cats');
var albumThree = $('.caths');
var albumFour = $('.beaches');
var albumFive = $('.cities');
var albumSix = $('.mountains');

var albumGallery = $('.album-gallery');
var header = $('header');
var albums = $('.album');
var img = $('img');
var onlyPhoto = $('.only-photo');
var menuImg = $('.menu-img');
var main = $('body');
var home = $('.fa-home');
var homePage = $('.home');
var backButton = $('.back-button');


$(document).ready(function() {
    homePage.on('click', function() {
        $(albumGallery).removeClass('gallerySide');
        $(albums).addClass('album');
        $(header).removeClass('hidden');
        $(menuImg).removeClass('hidden');
        $(home).addClass('hidden');
        $(albumOne).addClass('hidden');
        $(albumTwo).addClass('hidden');
        $(albumThree).addClass('hidden');
        $(albumFour).addClass('hidden');
        $(albumFive).addClass('hidden');
        $(albumSix).addClass('hidden');
    });
    backButton.on('click', function(evt) {
      $(img).removeClass('solo-view');
      $(img).removeClass('hidden');
      $(onlyPhoto).addClass('hidden');
      $(albumGallery).removeClass('hidden');
      $(albumGallery).addClass('gallerySide');
      $(albumOne).removeClass('hidden');
      $(albumGallery).addClass('gallerySide');
      $(albums).removeClass('album');
      $(albumTwo).addClass('hidden');
      $(albumThree).addClass('hidden');
      $(albumFour).addClass('hidden');
      $(albumFive).addClass('hidden');
      $(albumSix).addClass('hidden');
      $(header).addClass('hidden');
      $(menuImg).addClass('hidden');
      $(home).removeClass('hidden');
    });
    album1.on('click', function(evt) {
        $(albumOne).removeClass('hidden');
        $(albumGallery).addClass('gallerySide');
        $(albums).removeClass('album');
        $(albumTwo).addClass('hidden');
        $(albumThree).addClass('hidden');
        $(albumFour).addClass('hidden');
        $(albumFive).addClass('hidden');
        $(albumSix).addClass('hidden');
        $(header).addClass('hidden');
        $(menuImg).addClass('hidden');
        $(home).removeClass('hidden');
    });

    album2.on('click', function(evt) {
        $(albumTwo).removeClass('hidden');
        $(albumGallery).addClass('gallerySide');
        $(albums).removeClass('album');
        $(albumOne).addClass('hidden');
        $(albumThree).addClass('hidden');
        $(albumFour).addClass('hidden');
        $(albumFive).addClass('hidden');
        $(albumSix).addClass('hidden');
        $(header).addClass('hidden');
        $(menuImg).addClass('hidden');
        $(home).removeClass('hidden');
    });

    album3.on('click', function(evt) {
        $(albumThree).removeClass('hidden');
        $(albumGallery).addClass('gallerySide');
        $(albums).removeClass('album');
        $(albumTwo).addClass('hidden');
        $(albumOne).addClass('hidden');
        $(albumFour).addClass('hidden');
        $(albumFive).addClass('hidden');
        $(albumSix).addClass('hidden');
        $(header).addClass('hidden');
        $(menuImg).addClass('hidden');
        $(home).removeClass('hidden');
    });

    album4.on('click', function(evt) {
        $(albumFour).removeClass('hidden');
        $(albumGallery).addClass('gallerySide');
        $(albums).removeClass('album');
        $(albumTwo).addClass('hidden');
        $(albumThree).addClass('hidden');
        $(albumOne).addClass('hidden');
        $(albumFive).addClass('hidden');
        $(albumSix).addClass('hidden');
        $(header).addClass('hidden');
        $(menuImg).addClass('hidden');
        $(home).removeClass('hidden');
    });

    album5.on('click', function(evt) {
        $(albumFive).removeClass('hidden');
        $(albumGallery).addClass('gallerySide');
        $(albums).removeClass('album');
        $(albumTwo).addClass('hidden');
        $(albumThree).addClass('hidden');
        $(albumFour).addClass('hidden');
        $(albumOne).addClass('hidden');
        $(albumSix).addClass('hidden');
        $(header).addClass('hidden');
        $(menuImg).addClass('hidden');
        $(home).removeClass('hidden');
    });

    album6.on('click', function(evt) {
        $(albumSix).removeClass('hidden');
        $(albumGallery).addClass('gallerySide');
        $(albums).removeClass('album');
        $(albumTwo).addClass('hidden');
        $(albumThree).addClass('hidden');
        $(albumFour).addClass('hidden');
        $(albumFive).addClass('hidden');
        $(albumOne).addClass('hidden');
        $(header).addClass('hidden');
        $(menuImg).addClass('hidden');
        $(home).removeClass('hidden');
    });
    img.on('click', function() {
        $(this).addClass('solo-view');
        $(img).addClass('hidden');
        $(onlyPhoto).removeClass('hidden');
        $(albumGallery).addClass('hidden');
        $(albumGallery).removeClass('gallerySide');
    });
});
