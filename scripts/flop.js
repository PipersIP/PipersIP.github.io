
let closedFlop = true;

function touchCardBook() {
    if (closedFlop) {
        document.getElementById('book-card-cover').style.transform = 'rotateY(-180deg)';
        document.getElementById('inside-1').style.transform = 'rotateY(0deg)';
        
    } else {
        document.getElementById('inside-1').style.transform = 'rotateY(180deg)';
        document.getElementById('book-card-cover').style.transform = 'rotateY(0deg)';
    }
    closedFlop = ! closedFlop;
}

function createFlopper(n) {

    closedFlop = true;

    createModal(n);

    const lcHtml = `
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
    
    document.getElementsByClassName('lrg-scr-card-content')[0].innerHTML = lcHtml;

    const pgF = document.getElementById('page-1-img');
    const pgS = document.getElementById('page-2-img');
    const pgT = document.getElementById('page-3-img');
    const mdl = document.getElementById('mob-img-modal');

    switch(n) {
        case 2020:
            pgF.src = pth + "2020/2020-1.png";
            pgS.src = pth + "2020/2020-3.png";
            pgT.src = pth + "2020/2020-2.png";
            mdl.src = pth + "2020/Pipers_Xmas_2020email2.png";
            break;
        case 2016:
            pgF.src = pth + "2016/2016-1.PNG";
            pgS.src = pth + "2016/2016-2.PNG";
            pgT.src = pth + "2016/2016-3.1.png";
            mdl.src = pth + "2016/2016-1.PNG";
            break;
        case 2015:
            pgF.src = pth + "2015/2015-1.PNG";
            pgS.src = pth + "2015/2015-2.PNG";
            pgT.src = pth + "2015/2015-3.PNG";
            mdl.src = pth + "2015/2015-1.PNG";
            break;
        case 2014:
            pgF.src = pth + "2014/m-2014.png";
            pgS.src = pth + "2014/2014-pg-2.png";
            pgT.src = pth + "2014/2014-pg-3.png";
            mdl.src = pth + "2014/m-2014.png";
            break;
        case 2007:
            pgF.src = pth + "2007/2007-1.png";
            pgS.src = pth + "2007/2007-2.PNG";
            pgT.src = pth + "2007/2007-3.png";
            mdl.src = pth + "2007/2007-1.png";
            break;
        case 2001:
            pgF.src = pth + "2001/2001a.png";
            pgS.src = pth + "2001/2001b.png";
            pgT.src = pth + "2001/2001c.png";
            mdl.src = pth + "2001/2001a.png";
            break;
        case 1996:
            pgF.src = pth + "1996/1996-1.PNG";
            pgS.src = pth + "1996/1996-2.PNG";
            pgT.src = pth + "1996/1996-3.PNG";
            mdl.src = pth + "1996/1996-1.PNG";
            break;
        case 1985:
            pgF.src = pth + "1985/1985-1.1.png";
            pgS.src = pth + "1985/1985-2.1.png";
            pgT.src = pth + "1985/1985-3.png";
            mdl.src = pth + "1985/1985-1.1.png";
            break;
    }

}