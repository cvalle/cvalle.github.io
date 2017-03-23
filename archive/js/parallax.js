function moveDiv(textToMove, originalPosition) {
    var speed = 10;
//    var scrollTop = document.body.scrollTop;
    var scrollTop = window.pageYOffset;
//    var viewportOffset = textToMove.getBoundingClientRect();
//    var top = viewportOffset.offsetTop;
    var top = originalPosition / 4;
    console.log(top);
    if (scrollTop > top & scrollTop < originalPosition) {
        var relativePosition = (originalPosition - scrollTop) / scrollTop * speed;
//        var relativePosition = textToMove.offsetTop - top;
        textToMove.marginTop = relativePosition + 'px';
    }
    console.log("scrollTop = " + scrollTop + " original=" + originalPosition + ' relative=' + relativePosition + ' margintop=' + textToMove.style.marginTop);
};

var textToMove = document.getElementsByClassName("moving-text");
var originalPositions = [];
for (i = 0; i < textToMove.length; i++){
    originalPositions[i] = textToMove[i].offsetTop;
}

document.addEventListener('scroll', function(e) {
//    for (i = 0; i < textToMove.length; i++){
        moveDiv(textToMove[0], originalPositions[0]);
//    }
}, true);

//var parallax = document.querySelectorAll(".moving-text");
//var speed = 0.5;
//console.log(parallax);
//window.onscroll = function(){
//    [].slice.call(parallax).forEach(function(el, i) {
//        var windowYOffset = window.pageYOffset;
//        var elTop = (50 * speed) + '%';
//        el.style.top = elTop;
//        console.log(elTop);
//    })
//}