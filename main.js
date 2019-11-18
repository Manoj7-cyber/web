function dropDownMenu(){
    var x = document.getElementById('dropdownclick');
    if(x.className == 'top-nav'){
        x.className += ' responsive';
    }else{
        x.className = 'top-nav';
    }
}

var slideIndex = 0;
slideShows();

function slideShows(){
    var i;
    var slides = document.getElementsByClassName("mySlide");
    for(i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex>slides.length){
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(slideShows,2000);
}



var model = document.getElementById('myModel');
var btns = document.getElementsByClassName('myBtn');
var span = document.getElementById('close2');
var btn1 = document.getElementById('close1');

for(var i = 0; i < btns.length; i++){
    btns[i].addEventListener("click" , function(){
        model.style.display = 'block';
    });
}
span.onclick = function() {
  model.style.display = 'none';
}
btn1.onclick = function(){
    model.style.display = 'none';
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == model) {
    model.style.display = 'none';
  }
}