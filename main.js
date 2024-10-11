$(document).ready(() => {
    const html5QrCode = new Html5Qrcode("qr-reader");


    // V2
    function scanQrCode() {
        html5QrCode.start(
            { facingMode: "environment" },
            {
                fps: 5, 
                qrbox: 250, 
            },
            (decodedText, decodedResult) => {

                console.log(decodedResult);

                decodedText = "http://google.com?sadajsdkajsdhaksjdhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"

                if(decodedText.substring(0, 4) == 'http'){
                    chunkSize = 40;
                    let formattedLink = '';
                    for (let i = 0; i < decodedText.length; i += chunkSize) {
                        formattedLink += decodedText.slice(i, i + chunkSize) + '<br/>';
                    }
                    console.log(formattedLink);
                    
                    $("#result").html(`QR code: <a href="${decodedText}" target="_blank">${formattedLink}</a>`);
                }else{
                    $("#result").html(`QR code: ${decodedText}`);
                }


            })
            .catch(err => {
                console.error(`Error starting QR Code scanner: ${err}`);
            });
    }

    $("#scanButton").on("click", scanQrCode);
});
