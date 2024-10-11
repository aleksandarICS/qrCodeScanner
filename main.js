$(document).ready(() => {
    const html5QrCode = new Html5Qrcode("qr-reader");

    function scanQrCode() {
        html5QrCode.start(
            { facingMode: "environment" },
            {
                fps: 10,
                qrbox: 250,
                facingMode: { exact: "environment" }, 
                aspectRatio: 1.0
            },
            (decodedText, decodedResult) => {
                console.log(decodedResult);
                let formattedText = decodedText;

                if (decodedText.startsWith('http')) {
                    const chunkSize = 50;
                    formattedText = '';
                    for (let i = 0; i < decodedText.length; i += chunkSize) {
                        formattedText += decodedText.slice(i, i + chunkSize) + '<br/>';
                    }
                    $("#result").html(`QR code: <a href="${decodedText}" target="_blank">${formattedText}</a>`);
                } else {
                    $("#result").html(`QR code: ${decodedText}`);
                }
            })
            .catch(err => {
                console.error(`Error starting QR Code scanner: ${err}`);
                alert("Unable to access camera. Please check permissions.");
            });
    }

    $("#scanButton").on("click", scanQrCode);
});
