'use strict';
function menuFunction() {
    var t = document.getElementById('appleNone');
    // var t=x.nextElementSibling.innerHTML;
    if (t.style.display === 'block') {
        // if( document.getElementById('fileNone').style.display==='block' || document.getElementById('fileNone').style.display==='block' || document.getElementById('creditNone').style.display==='block' || document.getElementById('fabNone').style.display==='block' ) {}
        t.style.display='none';
        var col= document.getElementsByClassName('linkApple');
        for (var l=0;l<col.length;l++){
            col[l].style.color='white';
        }

    }

    else {
        if (document.getElementById('carNone').style.display === 'block') {
            document.getElementById('carNone').style.display = 'none';
            var col= document.getElementsByClassName('linkCar');
            for (var l=0;l<col.length;l++){
                col[l].style.color='white';
            }
        }
       else if (document.getElementById('fileNone').style.display === 'block') {
            document.getElementById('fileNone').style.display = 'none';
            var col= document.getElementsByClassName('linkFile');
            for (var l=0;l<col.length;l++){
                col[l].style.color='white';
            }

        }
        else if (document.getElementById('creditNone').style.display === 'block') {
            document.getElementById('creditNone').style.display = 'none';
            var col= document.getElementsByClassName('linkCredit');
            for (var l=0;l<col.length;l++){
                col[l].style.color='white';
            }
        }
        else if(document.getElementById('fabNone').style.display === 'block') {
            document.getElementById('fabNone').style.display = 'none';
            var col= document.getElementsByClassName('linkFab');
            for (var l=0;l<col.length;l++){
                col[l].style.color='white';
            }
        }
        t.style.display='block';}
    }

    function carFunction() {
        var t = document.getElementById('carNone');

        if (t.style.display === 'block') {

            t.style.display = 'none';
            var col= document.getElementsByClassName('linkCar');
            for (var l=0;l<col.length;l++){
                col[l].style.color='white';
            }
        }
        else {
            if (document.getElementById('appleNone').style.display === 'block') {
                document.getElementById('appleNone').style.display = 'none';
               var col= document.getElementsByClassName('linkApple');
               for (var l=0;l<col.length;l++){
                   col[l].style.color='white';
               }

            }
            else if (document.getElementById('fileNone').style.display === 'block') {
                document.getElementById('fileNone').style.display = 'none';
                var col= document.getElementsByClassName('linkFile');
                for (var l=0;l<col.length;l++){
                    col[l].style.color='white';
                }
            }
            else if (document.getElementById('creditNone').style.display === 'block') {
                document.getElementById('creditNone').style.display = 'none';
                var col= document.getElementsByClassName('linkCredit');
                for (var l=0;l<col.length;l++){
                    col[l].style.color='white';
                }
            }
            else if(document.getElementById('fabNone').style.display === 'block') {
                document.getElementById('fabNone').style.display = 'none';
                var col= document.getElementsByClassName('linkFab');
                for (var l=0;l<col.length;l++){
                    col[l].style.color='white';
                }
            }
            t.style.display = 'block';
        }
    }

    function fileFunction() {
        var t = document.getElementById('fileNone');

        if (t.style.display === 'block') {

            t.style.display = 'none';
            var col= document.getElementsByClassName('linkFile');
            for (var l=0;l<col.length;l++){
                col[l].style.color='white';
            }
        }
        else {
            if (document.getElementById('carNone').style.display === 'block') {
                document.getElementById('carNone').style.display = 'none';
                var col= document.getElementsByClassName('linkCar');
                for (var l=0;l<col.length;l++){
                    col[l].style.color='white';
                }
            }
            else if (document.getElementById('appleNone').style.display === 'block') {
                document.getElementById('appleNone').style.display = 'none';
                var col= document.getElementsByClassName('linkApple');
                for (var l=0;l<col.length;l++){
                    col[l].style.color='white';
                }
            }
            else if (document.getElementById('creditNone').style.display === 'block') {
                document.getElementById('creditNone').style.display = 'none';
                var col= document.getElementsByClassName('linkCredit');
                for (var l=0;l<col.length;l++){
                    col[l].style.color='white';
                }
            }
            else if(document.getElementById('fabNone').style.display === 'block') {
                document.getElementById('fabNone').style.display = 'none';
                var col= document.getElementsByClassName('linkFab');
                for (var l=0;l<col.length;l++){
                    col[l].style.color='white';
                }
            }
            t.style.display = 'block';
        }
    }

    function creditFunction() {
        var t = document.getElementById('creditNone');

        if (t.style.display === 'block') {

            t.style.display = 'none';
            var col= document.getElementsByClassName('linkCredit');
            for (var l=0;l<col.length;l++){
                col[l].style.color='white';
            }
        }
        else {
            if (document.getElementById('carNone').style.display === 'block') {
                document.getElementById('carNone').style.display = 'none';
                var col= document.getElementsByClassName('linkCar');
                for (var l=0;l<col.length;l++){
                    col[l].style.color='white';
                }
            }
            else if (document.getElementById('fileNone').style.display === 'block') {
                document.getElementById('fileNone').style.display = 'none';
                var col= document.getElementsByClassName('linkFile');
                for (var l=0;l<col.length;l++){
                    col[l].style.color='white';
                }
            }
            else if (document.getElementById('appleNone').style.display === 'block') {
                document.getElementById('appleNone').style.display = 'none';
                var col= document.getElementsByClassName('linkApple');
                for (var l=0;l<col.length;l++){
                    col[l].style.color='white';
                }
            }
            else if(document.getElementById('fabNone').style.display === 'block') {
                document.getElementById('fabNone').style.display = 'none';
                var col= document.getElementsByClassName('linkFab');
                for (var l=0;l<col.length;l++){
                    col[l].style.color='white';
                }
            }
            t.style.display = 'block';
        }
    }

    function fabFunction() {
        var t = document.getElementById('fabNone');

        if (t.style.display === 'block') {

            t.style.display = 'none';
            var col= document.getElementsByClassName('linkFab');
            for (var l=0;l<col.length;l++){
                col[l].style.color='white';
            }
        }
        else {
            if (document.getElementById('carNone').style.display === 'block') {
                document.getElementById('carNone').style.display = 'none';
                var col= document.getElementsByClassName('linkCar');
                for (var l=0;l<col.length;l++){
                    col[l].style.color='white';
                }
            }
            else if (document.getElementById('fileNone').style.display === 'block') {
                document.getElementById('fileNone').style.display = 'none';
                var col= document.getElementsByClassName('linkFile');
                for (var l=0;l<col.length;l++){
                    col[l].style.color='white';
                }
            }
            else if (document.getElementById('creditNone').style.display === 'block') {
                document.getElementById('creditNone').style.display = 'none';
                var col= document.getElementsByClassName('linkCredit');
                for (var l=0;l<col.length;l++){
                    col[l].style.color='white';
                }
            }
            else if(document.getElementById('appleNone').style.display === 'block') {
                document.getElementById('appleNone').style.display = 'none';
                var col= document.getElementsByClassName('linkApple');
                for (var l=0;l<col.length;l++){
                    col[l].style.color='white';
                }
            }
            t.style.display = 'block';
        }
    }

function aFunc(x) {
    x.style.transform='scale(1.05)';
if (x.style.display!=='block') {
    document.getElementById('appleNone').style.display = 'none';
    x.style.color = 'red';

}
}
function caFunc(x) {
    x.style.transform='scale(1.05)';
    if (x.style.display!=='block') {
        document.getElementById('carNone').style.display = 'none';
        x.style.color = 'red';

    }
}
function fFunc(x) {
    x.style.transform='scale(1.05)';
    if (x.style.display!=='block') {
        document.getElementById('fileNone').style.display = 'none';
        x.style.color = 'red';

    }
}
function cFunc(x) {
    x.style.transform='scale(1.05)';
    if (x.style.display!=='block') {
        document.getElementById('creditNone').style.display = 'none';
        x.style.color = 'red';

    }
}
function faFunc(x) {
    x.style.transform='scale(1.05)';
    if (x.style.display!=='block') {
        document.getElementById('fabNone').style.display = 'none';
        x.style.color = 'red';

    }
}

var x=screen.width;
var y=screen.height;
console.log(x+'x'+y);

/// Body sexmelu jamank <a> pakven

// document.getElementsByTagName('body').onclick=function () {
//     var h=document.getElementsByTagName('a');
//     for (var y=0;y<h.length;y++){
//         h[y].style.display='none';
//     }
//
// };


// 1366 x 768