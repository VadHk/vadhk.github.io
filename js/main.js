'use strict';

(function(){
    var loop = document.getElementById("loop");
    var search = document.getElementById("search");

    loop.onclick=function(){
        if(search.classList.contains("search-block")){
            search.classList.remove("search-block");
        }else{
            search.classList.add("search-block");
        }
    };


    var dialog = document.querySelector('dialog');
    var hovList = document.querySelectorAll('.hov');

    for (var i=0; i<hovList.length; i++){
        hovList[i].onclick = function() {
            dialog.show();
        }
    }
    document.querySelector('.btn-close').onclick = function() {
        dialog.close();
    }


    var header = document.querySelector('header');

    window.onscroll = function() {scrolling()};

    function scrolling() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.className = "scroll";
        } else {
            header.className = "";
        }
    };



}).call(this);




