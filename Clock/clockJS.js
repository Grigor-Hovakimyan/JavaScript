"use strict";
//varkyanneri gcer@
var smallLines = document.getElementsByClassName('smallLines');
var clockEl = document.getElementsByClassName('clock')[0];

for (var i = 1; i < 60; i++) {
    clockEl.innerHTML += "<div class='smallLines'></div>";
    console.log(smallLines[i].style.transform = "rotate(" + 6 * i+"deg)");
    
}

function clock() {
    var weekday = new Array(7),
        d = new Date(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds(),


        hDeg = h * 30 + m * (360/720),
        mDeg = m * 6 + s * (360/3600),
        sDeg = s * 6,
//documentum arajin nshvac classov tar@
        hEl = document.querySelector('.hourHand'),
        mEl = document.querySelector('.minuteHand'),
        sEl = document.querySelector('.secondHand'),
        dayEl = document.querySelector('.day');


    hEl.style.transform = "rotate("+hDeg+"deg)";
    mEl.style.transform = "rotate("+mDeg+"deg)";
    sEl.style.transform = "rotate("+sDeg+"deg)";

}
//0.1 varkyan@ mek kanchum e functian
setInterval("clock()", 100);


//tveri guyn@ poxum e
function hN(elem,col) {
elem.style.color=col;
}

// document.getElementsByClassName('dot').onclick=function () {center()
// };
function center() {
    // console.log(document.getElementsByTagName('span'));
    var t = document.querySelectorAll('#span span');
    for(var q = 0; q < t.length ; q++){
        t[q].style.color = "#fff";
    }
    // document.getElementsByTagName('span').style.color = 'white';
}

