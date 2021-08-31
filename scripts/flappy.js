// let closed = true;
function touchCardBook() {
    if (closed) {
        document.getElementById('book-card-cover').style.transform = 'rotateY(-180deg)';
        document.getElementById('inside-1').style.transform = 'rotateY(0deg)';
        
    } else {
        document.getElementById('inside-1').style.transform = 'rotateY(180deg)';
        document.getElementById('book-card-cover').style.transform = 'rotateY(0deg)';
    }
    closed = ! closed;
}

// let closed = true;
function touchCardFlap() {
    if (closed) {
        document.getElementById('cover-horiz').style.transform = 'rotateX(180deg)';
        document.getElementById('inside-1-horiz').style.transform = 'rotateX(0deg)';
        
    } else {
        document.getElementById('inside-1-horiz').style.transform = 'rotateX(-180deg)';
        document.getElementById('cover-horiz').style.transform = 'rotateX(0deg)';
    }
    closed = ! closed;
}


// function touchCardFlip(path_front, path_back) {
//     document.getElementById('card-back').src = 'assets/' + flip_path_back;
//     document.getElementById('card-front').src = 'assets/' + flip_path_front;
//     if (front) document.getElementById('inner').style.transform = 'rotateY(180deg)';
//     else document.getElementById('inner').style.transform = 'rotateY(0deg)'
//     front = ! front;
// }

let flipped = false;
function flippingCard() {
    if (! flipped) document.getElementsByClassName("flip-card-inner")[0].style.transform = "rotateY(180deg)";
    else document.getElementsByClassName("flip-card-inner")[0].style.transform = "rotateY(0deg)";
    flipped = ! flipped;
}