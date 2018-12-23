'use strict';
function countryFunction(gg) {
if (gg.id==='country') {
    var text= document.getElementById('h1');
    text.innerText='';
    var x = document.getElementById('country').selectedIndex;
    document.getElementById('capitalCity').value = document.getElementById('capitalCity')[x].text;
    var country=document.getElementById('country').value;
    var capital= document.getElementById('capitalCity')[x].text;
    text.innerText='The capital of '+country+' is '+capital;
    text.className='textStyle';


}
else if (gg.id==='capitalCity'){
    var text= document.getElementById('h1');
    text.innerText='';
    var y = document.getElementById('capitalCity').selectedIndex;
    document.getElementById('country').value = document.getElementById('country')[y].text;
    var capital1=document.getElementById('capitalCity').value;
    var country1= document.getElementById('country')[y].text;
    text.innerText=capital1+' is the capital of '+country1;
    text2.className='textStyle';

}
}

