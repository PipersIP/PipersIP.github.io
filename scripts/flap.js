
let closedFlap = true;

function touchCardFlap() {
    if (closedFlap) {
        document.getElementById('cover-horiz').style.transform = 'rotateX(180deg)';
        document.getElementById('inside-1-horiz').style.transform = 'rotateX(0deg)';
        document.getElementById('inside-2-horiz').classList.remove("hide-modal");
        
    } else {
        document.getElementById('inside-1-horiz').style.transform = 'rotateX(-180deg)';
        document.getElementById('cover-horiz').style.transform = 'rotateX(0deg)';
    }
    closedFlap = ! closedFlap;
}

function createFlapper(n) {

    closedFlap = true;

    createModal();

    const lcHtml  = `
        <div class='flap-card' onclick='touchCardFlap()'>
            <div class='flick-card-inner '>
                <div id='cover-horiz' class='card-shadow'>
                    <img src="" id='page-1-img-flap'>
                </div>
                <div class='inside-1-horiz ' id='inside-1-horiz'>
                    <img src="" id='page-2-img-flap'>
                </div>
                <div class='inside-2-horiz card-shadow hide-modal' id='inside-2-horiz'>
                    <img src="" id='page-3-img-flap'>
                </div>
            </div>
        </div>
        `;
    
    document.getElementsByClassName('lrg-scr-card-content')[0].innerHTML = lcHtml;

    const pgF = document.getElementById('page-1-img-flap');
    const pgS = document.getElementById('page-2-img-flap');
    const pgT = document.getElementById('page-3-img-flap');
    const mdl = document.getElementById('mob-img-modal');

    switch(n) {
        case 2004:
            pgF.src = pth + "2004/2004-1.1.png";
            pgS.src = pth + "2004/2004-2.1.png";
            pgT.src = pth + "2004/2004-3.1.png";
            mdl.src = pth + "2004/m-2004.png";
            break;
        case 2005:
            pgF.src = pth + "2005/2005-1.PNG";
            pgS.src = pth + "2005/2005-2.png";
            pgT.src = pth + "2005/2005-3.png";
            mdl.src = pth + "2005/m-2005-1.PNG";
            document.getElementById('cover-horiz').classList.add('flap-black');
            document.getElementsByClassName('inside-2-horiz')[0].classList.add('flap-purple');
            document.getElementsByClassName('inside-1-horiz')[0].classList.add('flap-purple');
            break;
    }
}