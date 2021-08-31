

function createModal() {

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


}