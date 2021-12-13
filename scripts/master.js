

function close_modals () {
    document.getElementsByClassName('modal')[0].classList.add("hide-modal");
    document.getElementsByClassName('lrg-scr-card-content')[0].innerHTML = "";
    const credit_element_dskt = document.getElementById('lrg-scr-credits');
    credit_element_dskt.classList.add("hide-me");
    credit_element_dskt.classList.remove("show-me");
}

const pth = "assets/";

function openCard(year) {
    let cartoonist = '';
    const malcolm = 'Malcolm Dale';
    const mark = 'Mark Olson';
    const credit_element_dskt = document.getElementById('lrg-scr-credits');
    credit_element_dskt.classList.remove("hide-me");
    credit_element_dskt.classList.add("show-me");


    switch(year) {
        case 1985:
            cartoonist = malcolm;
            createFlopper(1985);
            break;
        case 1988:
            cartoonist = malcolm;
            createFlipper(1988);
            break;
        case 1989:
            cartoonist = malcolm;
            createFlipper(1989);
            break;
        case 1990:
            cartoonist = malcolm;
            createFlipper(1990);
            break;
        case 1996:
            cartoonist = malcolm;
            createFlopper(1996);
            break;
        case 1998:
            cartoonist = malcolm;
            createFlipper(1998);
            break;
    }

    credit_element_dskt.innerText = `designed by ${cartoonist}`
}