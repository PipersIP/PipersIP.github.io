
function createStatic(n) {

    createModal(n);
    
    const lcHtml = `
        <div class='static-card card-shadow'>
            <img id='static-img'>
        </div>
        `;
    
    document.getElementsByClassName('lrg-scr-card-content')[0].innerHTML = lcHtml;

    const stc = document.getElementById('static-img');
    const mdl = document.getElementById('mob-img-modal');
    

    switch (n) {
        case 2019:
            stc.src = pth + '2019/c2019.PNG';
            mdl.src = pth + '2019/c2019.PNG';
            break;
    }
    
}