let closed = true;
let front = true;

let flip_path_front = "";
let flip_path_back = "";


function thing(year) {

    closed = true;
    let cartoonist = '';
    const malcolm = 'Malcolm Dale';
    const mark = 'Mark Olson';
    let no_card = false;

    const card_element_mobl = document.getElementsByClassName('modal')[0];
    const card_element_dskt = document.getElementsByClassName('lrg-scr-card-content')[0];
    const crdt_element_dskt = document.getElementsByClassName('lrg-scr-credits-wrapper')[0];
    
    
    document.getElementsByClassName('modal')[0].style.display = 'block';
    document.getElementsByClassName('lrg-scr-card-content')[0].style.display = 'block'; 

    
    let mob_html = `<div class='modal-container'>
        <div class='modal-img'>
            <img id='mob-img-modal' src='assets/1985/1985-1.1.png'>
        </div>
        <button class='modal-close' onclick='close_modals()'>&times;</button>
        <div class='modal-credits credits'></div>
    </div>`;
    let book_card_html = `
        <div class='book-card' onclick='touchCardBook()'>
            <div class='book-card-inner '>
                <div id='book-card-cover' class='card-shadow'>
                    <img src='assets/other/img/tst-1.png' id='page-1-img'>
                </div>
                <div class='inside-1 card-shadow' id='inside-1'>
                    <img src='assets/other/img/tst-2.png' id='page-2-img'>
                </div>
                <div class='inside-2 card-shadow'>
                    <img src='assets/other/img/tst-3.png' id='page-3-img'>
                </div>
            </div>
        </div>
        `;
    let flap_card_html = `
        <div class='flap-card' onclick='touchCardFlap()'>
            <div class='flick-card-inner '>
                <div id='cover-horiz' class='card-shadow'>
                    <img src='assets/2004/2004-1.1.png' id='page-1-img-flap'>
                </div>
                <div class='inside-1-horiz ' id='inside-1-horiz'>
                    <img src='assets/2004/2004-2.1.png' id='page-2-img-flap'>
                </div>
                <div class='inside-2-horiz card-shadow'>
                    <img src='assets/2004/2004-3.1.png' id='page-3-img-flap'>
                </div>
            </div>
        </div>
        `;
    let flip_card_html = `
        <div class="flip-card" onclick='flippingCard()'>
            <div class="flip-card-inner card-shadow" id='inner'>
                <div class="flip-card-front">
                    <img id='card-front' src=''>
                </div>
                <div class="flip-card-back">
                    <img id='card-back'>
                </div>
            </div>
        </div>
        `;
    let static_card_html = `
        <div class='static-card card-shadow'>
            <img id='static-img'>
        </div>
        `;
    
    switch (year) {
        case 2020: // book
            cartoonist = malcolm;
            card_element_mobl.innerHTML = mob_html;
            document.getElementById('mob-img-modal').src = 'assets/2020/Pipers Xmas 2020email2.png';
            closed = true; 
            card_element_dskt.innerHTML = book_card_html;
            document.getElementById('page-1-img').src = 'assets/2020/2020-1.png';
            document.getElementById('page-2-img').src = 'assets/2020/2020-3.png';
            document.getElementById('page-3-img').src = 'assets/2020/2020-2.png';
            break;
        case 2019: // static
            cartoonist = malcolm;
            card_element_mobl.innerHTML = mob_html;
            document.getElementById('mob-img-modal').src = 'assets/2019/c2019.PNG';
            card_element_dskt.innerHTML = static_card_html;
            document.getElementById('static-img').src = 'assets/2019/c2019.PNG';
            break;
        case 2016: // book
            cartoonist = malcolm;
            card_element_mobl.innerHTML = mob_html;
            document.getElementById('mob-img-modal').src = 'assets/2016/2016-1.PNG';
            closed = true; 
            card_element_dskt.innerHTML = book_card_html;
            document.getElementById('page-1-img').src = 'assets/2016/2016-1.PNG';
            document.getElementById('page-2-img').src = 'assets/2016/2016-2.PNG';
            document.getElementById('page-3-img').src = 'assets/2016/2016-3.1.png';
            break;
        case 2015: // book
            cartoonist = malcolm;
            card_element_mobl.innerHTML = mob_html;
            document.getElementById('mob-img-modal').src = 'assets/2015/2015-1.PNG';
            closed = true; 
            card_element_dskt.innerHTML = book_card_html;
            document.getElementById('page-1-img').src = 'assets/2015/2015-1.PNG';
            document.getElementById('page-2-img').src = 'assets/2015/2015-2.PNG';
            document.getElementById('page-3-img').src = 'assets/2015/2015-3.PNG';
            break;
        case 2014: // book
            cartoonist = mark;
            card_element_mobl.innerHTML = mob_html;
            document.getElementById('mob-img-modal').src = 'assets/2014/m-2014.png';
            closed = true; 
            card_element_dskt.innerHTML = book_card_html;
            document.getElementById('page-1-img').src = 'assets/2014/m-2014.png';
            document.getElementById('page-2-img').src = 'assets/2014/2014-pg-2.png';
            document.getElementById('page-3-img').src = 'assets/2014/2014-pg-3.png';
            break;
        case 2008: // flip
            cartoonist = malcolm;
            card_element_mobl.innerHTML = mob_html;
            document.getElementById('mob-img-modal').src = 'assets/2008/2008-1.PNG';
            front = true;
            card_element_dskt.innerHTML = flip_card_html;
            flip_path_front = "2008/2008-1.PNG";
            flip_path_back = "2008/2008-2.1.png";
            document.getElementById('card-front').src = 'assets/2008/2008-1.PNG';
            document.getElementById('card-back').src = 'assets/2008/2008-2.1.png';
            break;
        case 2007: // book
            cartoonist = malcolm;
            card_element_mobl.innerHTML = mob_html;
            document.getElementById('mob-img-modal').src = 'assets/2007/2007-1.png';
            closed = true; 
            card_element_dskt.innerHTML = book_card_html;
            document.getElementById('page-1-img').src = 'assets/2007/2007-1.png';
            document.getElementById('page-2-img').src = 'assets/2007/2007-2.PNG';
            document.getElementById('page-3-img').src = 'assets/2007/2007-3.png';
            break;
        case 2005: // flap
            cartoonist = mark;
            card_element_mobl.innerHTML = mob_html;
            document.getElementById('mob-img-modal').src = 'assets/2005/m-2005-1.PNG';
            closed = true;
            card_element_dskt.innerHTML = flap_card_html;
            document.getElementById('page-1-img-flap').src = 'assets/2005/2005-1.PNG';
            document.getElementById('page-2-img-flap').src = 'assets/2005/2005-2.png';
            document.getElementById('page-3-img-flap').src = 'assets/2005/2005-3.png';
            document.getElementById('cover-horiz').classList.add('flap-black');
            document.getElementsByClassName('inside-2-horiz')[0].classList.add('flap-purple');
            document.getElementsByClassName('inside-1-horiz')[0].classList.add('flap-purple');
            break;
        case 2004: // flap
            cartoonist = mark;
            card_element_mobl.innerHTML = mob_html;
            document.getElementById('mob-img-modal').src = 'assets/2004/m-2004.png';
            closed = true;
            card_element_dskt.innerHTML = flap_card_html;
            document.getElementById('page-1-img-flap').src = 'assets/2004/2004-1.1.png';
            document.getElementById('page-2-img-flap').src = 'assets/2004/2004-2.1.png';
            document.getElementById('page-3-img-flap').src = 'assets/2004/2004-3.1.png';
            break;
        case 2001: // book
            cartoonist = mark;
            card_element_mobl.innerHTML = mob_html;
            document.getElementById('mob-img-modal').src = 'assets/2001/2001a.png';
            closed = true; 
            card_element_dskt.innerHTML = book_card_html;
            document.getElementById('page-1-img').src = 'assets/2001/2001a.png';
            document.getElementById('page-2-img').src = 'assets/2001/2001b.png';
            document.getElementById('page-3-img').src = 'assets/2001/2001c.png';
            break;
        case 1999: // flip
            cartoonist = malcolm;
            card_element_mobl.innerHTML = mob_html;
            document.getElementById('mob-img-modal').src = 'assets/1999/m-1999-1.png';
            front = true;
            card_element_dskt.innerHTML = flip_card_html;
            flip_path_front = "1999/m-1999-1.png";
            flip_path_back = "1999/m-1999-2.png";
            document.getElementById('card-front').src = 'assets/1999/m-1999-1.png';
            document.getElementById('card-back').src = 'assets/1999/m-1999-2.png';
            break;
        case 1998: // flip
            cartoonist = malcolm;
            card_element_mobl.innerHTML = mob_html;
            document.getElementById('mob-img-modal').src = 'assets/1998/m-1998-1.png';
            front = true;
            card_element_dskt.innerHTML = flip_card_html;
            flip_path_front = "1998/m-1998-1.png";
            flip_path_back = "1998/m-1998-2.png";
            document.getElementById('card-front').src = 'assets/1998/m-1998-1.png';
            document.getElementById('card-back').src = 'assets/1998/m-1998-2.png';
            break;
        case 1996: // book
            cartoonist = malcolm;
            card_element_mobl.innerHTML = mob_html;
            document.getElementById('mob-img-modal').src = 'assets/1996/1996-1.PNG';
            closed = true; 
            card_element_dskt.innerHTML = book_card_html;
            document.getElementById('page-1-img').src = 'assets/1996/1996-1.PNG';
            document.getElementById('page-2-img').src = 'assets/1996/1996-2.PNG';
            document.getElementById('page-3-img').src = 'assets/1996/1996-3.PNG';
            break;
        case 1990: // flip
            cartoonist = malcolm;
            card_element_mobl.innerHTML = mob_html;
            document.getElementById('mob-img-modal').src = 'assets/1990/1990-1.PNG';
            front = true;
            card_element_dskt.innerHTML = flip_card_html;
            flip_path_front = "1990/1990-1.PNG";
            flip_path_back = "1990/1990-2.PNG";
            document.getElementById('card-front').src = 'assets/1990/1990-1.PNG';
            document.getElementById('card-back').src = 'assets/1990/1990-2.PNG';
            break;
        case 1989: // flip
            cartoonist = malcolm;
            card_element_mobl.innerHTML = mob_html;
            document.getElementById('mob-img-modal').src = 'assets/1989/1989-1.PNG';
            front = true;
            card_element_dskt.innerHTML = flip_card_html;
            flip_path_front = "1989/1989-1.PNG";
            flip_path_back = "1989/1989-2.PNG";
            document.getElementById('card-front').src = 'assets/1989/1989-1.PNG';
            document.getElementById('card-back').src = 'assets/1989/1989-2.PNG';
            break;
        case 1988: // flip
            cartoonist = malcolm;
            card_element_mobl.innerHTML = mob_html;
            document.getElementById('mob-img-modal').src = 'assets/1988/1988-1.PNG';
            front = true;
            card_element_dskt.innerHTML = flip_card_html;
            flip_path_front = "1988/1988-2.PNG";
            flip_path_back = "1988/m-1988-2.png";
            document.getElementById('card-front').src = 'assets/' + flip_path_front;
            document.getElementById('card-back').src  = 'assets/' + flip_path_back;
            break;
        case 1985: // book
            cartoonist = malcolm;
            card_element_mobl.innerHTML = mob_html;
            document.getElementById('mob-img-modal').src = 'assets/1985/1985-1.1.png';
            closed = true; 
            card_element_dskt.innerHTML = book_card_html;
            document.getElementById('page-1-img').src = 'assets/1985/1985-1.1.png';
            document.getElementById('page-2-img').src = 'assets/1985/1985-2.1.png';
            document.getElementById('page-3-img').src = 'assets/1985/1985-3.png';
            break;
        default:
            no_card = true;
            break;
    }
    

    if (no_card) {
        card_element_mobl.innerHTML = '';
        card_element_dskt.innerHTML = '';
        crdt_element_dskt.innerHTML = '';
        document.getElementsByClassName('modal')[0].style.display = 'none';
        document.getElementsByClassName('lrg-scr-card-content')[0].style.display = 'none'; 
    } else {
        let lrg_sct_credits = `
            <div class='lrg-scr-credits credits'>
                designed by ${cartoonist}
            </div>
            `;
        crdt_element_dskt.innerHTML = lrg_sct_credits;
        crdt_element_dskt.style.display = 'block'
        document.getElementsByClassName('modal-credits credits')[0].innerHTML = `designed by ${cartoonist}`;
    }
} 

document.addEventListener("keydown", event => {
if (event.isComposing || event.keyCode === 27) {
    close_modals();
    return;
}
});

function flip() {
    if (front) document.getElementById('inner').style.transform = 'rotateY(180deg)';
    else document.getElementById('inner').style.transform = 'rotateY(0deg)'
    front = ! front;
}

function close_modals () {
    document.getElementsByClassName('modal')[0].style.display = 'none';
    document.getElementsByClassName('lrg-scr-card-content')[0].style.display = 'none'; 
    document.getElementsByClassName('lrg-scr-credits-wrapper')[0].style.display = 'none'; 
}

function touchCard(vert) {
        
    console.log(closed);
        
    if (vert) {
        if (closed) {
            document.getElementById('cover').style.transform = 'rotateY(-180deg)';
            document.getElementById('inside-1').style.transform = 'rotateY(0deg)';
            
        } else {
            document.getElementById('inside-1').style.transform = 'rotateY(180deg)';
            document.getElementById('cover').style.transform = 'rotateY(0deg)';
            
        }
    } else {
        if (closed) {
            document.getElementById('cover-horiz').style.transform = 'rotateX(180deg)';
            document.getElementById('inside-1-horiz').style.transform = 'rotateX(0deg)';
            
        } else {
            document.getElementById('inside-1-horiz').style.transform = 'rotateX(-180deg)';
            document.getElementById('cover-horiz').style.transform = 'rotateX(0deg)';   
        }
    }
    
    closed = ! closed;
}