let flipped = false;


function flipCard() {
    if (! flipped) document.getElementsByClassName("flip-card-inner")[0].style.transform = "rotateY(180deg)";
    else document.getElementsByClassName("flip-card-inner")[0].style.transform = "rotateY(0deg)";
    flipped = ! flipped;
}


function createFlipper(n) {

    const mob_disp = document.getElementsByClassName('modal-wrapper')[0]; // mobile display
    mob_disp.classList.remove("hide-modal");

    let mbHtml = `
        <div class="modal">
            <div class='modal-container'>
                <div class='modal-img'>
                    <img id='mob-img-modal' src="">
                </div>
                <button class='modal-close' onclick='close_modals()'>&times;</button>
                <div class='modal-credits credits'></div>
            </div>
        </div>
        `;
    mob_disp.innerHTML = mbHtml;


    flipped = false;
    lcHtml = `
        <div class="flip-card" onclick="flipCard()">
            <div class="flip-card-inner card-shadow">
            <div class="flip-card-front">
                <img id='card-front' src="">
            </div>
            <div class="flip-card-back">
                <img id='card-back' src="">
            </div>
            </div>
        </div>
        `;
    document.getElementsByClassName('lrg-scr-card-content')[0].innerHTML = lcHtml;
    const frt = document.getElementById('card-front');
    const bck = document.getElementById('card-back');
    const mdl = document.getElementById('mob-img-modal');
    const pth = "assets/";
    switch(n) {
        case 2008:
            frt.src = pth + "2008/2008-1.PNG";
            bck.src = pth + "2008/2008-2.1.png";
            mdl.src = pth + "2008/2008-1.PNG";
            break;
        case 1999:
            frt.src = pth + "1999/m-1999-1.png";
            bck.src = pth + "1999/m-1999-2.png";
            mdl.src = pth + "1999/m-1999-1.png";
            break;
        case 1998:
            frt.src = pth + "1998/m-1998-1.png";
            bck.src = pth + "1998/m-1998-2.png";
            mdl.src = pth + "1998/m-1998-1.png";
            break;
        case 1990:
            frt.src = pth + "1990/1990-1.PNG";
            bck.src = pth + "1990/1990-2.PNG";
            mdl.src = pth + "1990/1990-1.PNG";
            break;
        case 1989:
            frt.src = pth + "1990/1990-1.PNG";
            bck.src = pth + "1990/1990-2.PNG";
            mdl.src = pth + "1989/1989-1.PNG";
            break;
        case 1988:
            frt.src = pth + "1988/1988-2.png";
            bck.src = pth + "1988/m-1988-2.png";
            mdl.src = pth + "1988/1988-1.PNG";
            break;
    }
}

function close_modals () {
    // document.getElementsByClassName('modal')[0].style.display = 'none';
    document.getElementsByClassName('modal')[0].classList.add("hide-modal");
    // document.getElementsByClassName('lrg-scr-card-content')[0].style.display = 'none'; 
    document.getElementsByClassName('lrg-scr-card-content')[0].innerHTML = "";
}