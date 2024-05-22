let imgBox = document.getElementById('imgbox');
let qrImg = document.getElementById('qrImg');
let qrtext = document.getElementById('qrtext');

function qrGenerator(){
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
}