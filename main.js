$(document).ready(() => {
    const html5QrCode = new Html5Qrcode("qr-reader");




    // var html5QrcodeScanner = new Html5QrcodeScanner(
    //     "qr-reader", { fps: 20, qrbox: 250 });
    // html5QrcodeScanner.render(onScanSuccess, onScanError);


    // function onScanSuccess(qrCodeMessage) {
    //     console.log(qrCodeMessage);

    //     // document.getElementById('qr-reader').style.display= 'none'        
    //     // scanner.clear();
        
    // }
    // function onScanError(errorMessage) {
    //   //handle scan error
    //   console.log(errorMessage);
      
    // }





    function scanQrCode() {
        html5QrCode.start(
            { facingMode: "environment" },
            {
                fps: 10, 
                qrbox: 250, 
                // formatsToSupport: [Html5Qrcode.SCAN_FORMATS.QR_CODE, Html5Qrcode.SCAN_FORMATS.EAN_13]
            },
            (decodedText, decodedResult) => {
                // Ovo se poziva kada je QR kod skeniran
                console.log(`Dectected QR Code: ${decodedText}`);
                $("#results").text(`Detected: ${decodedText}`);
            },
            (errorMessage) => {
                // Ovo se poziva kada je greška tokom skeniranja
                console.log(`Error scanning: ${errorMessage}`);
            })
            .catch(err => {
                console.error(`Error starting QR Code scanner: ${err}`);
            });
    }

    $("#scanButton").on("click", scanQrCode);
});


// $(document).ready(() => {
//     const html5QrCode = new Html5Qrcode("qr-reader");
//     let scanning = false; // Oznaka za praćenje stanja skeniranja

//     function scanQrCode() {
//         console.log(scanning);
        
//         if (scanning) {
//             console.log("Already scanning. Please stop the current scan first.");
//             return; // Ako je već u procesu skeniranja, ne pokreći ponovo
//         }
        
//         scanning = true; // Postavi oznaku skeniranja

//         html5QrCode.start(
//             { facingMode: "environment" },
//             {
//                 fps: 5,
//                 qrbox: 200
//             },
//             (decodedText, decodedResult) => {
//                 console.log(`Detected QR Code: ${decodedText}`);
//                 $("#results").text(`Detected: ${decodedText}`);
//                 stopScanning(); // Zaustavi skeniranje kada je kod prepoznat
//             },
//             (errorMessage) => {
//                 // Ovo se poziva kada dođe do greške
//                 console.log(`Error scanning: ${errorMessage}`);
//             }
//         ).catch(err => {
//             console.error(`Error starting QR Code scanner: ${err}`);
//             scanning = false; // Resetuj oznaku skeniranja u slučaju greške
//         });
//     }

//     function stopScanning() {
//         html5QrCode.stop().then((ignore) => {
//             scanning = false; // Resetuj oznaku skeniranja
//             console.log("Scanning stopped.");
//         }).catch((err) => {
//             console.error(`Error stopping QR Code scanner: ${err}`);
//         });
//     }

//     $("#scanButton").on("click", scanQrCode);
// });