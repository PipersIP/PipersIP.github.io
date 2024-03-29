

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
        case 1999:
            cartoonist = malcolm;
            createFlipper(1999);
            break;
        case 2001:
            cartoonist = mark;
            createFlopper(2001)
            break;
        case 2004:
            cartoonist = mark;
            createFlapper(2004);
            break;
        case 2005:
            cartoonist = mark;
            createFlapper(2005);
            break;
        case 2006:
            cartoonist = malcolm;
            createFlopper(2006);
            break;
        case 2007:
            cartoonist = malcolm;
            createFlopper(2007);
            break;
        case 2008:
            cartoonist = malcolm;
            createFlipper(2008);
            break;
        case 2014:
            cartoonist = mark;
            createFlopper(2014);
            break;
        case 2015:
            cartoonist = malcolm;
            createFlopper(2015);
            break;
        case 2016:
            cartoonist = malcolm;
            createFlopper(2016);
            break;
        case 2019:
            cartoonist = malcolm;
            createStatic(2019);
            break;
        case 2020:
            cartoonist = malcolm;
            createFlopper(2020);
            break;
        case 2021:
            cartoonist = malcolm;
            createStatic(2021);
            break;
    }

    credit_element_dskt.innerText = `designed by ${cartoonist}`
}