function createFlapper(year) {
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
}