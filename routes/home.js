const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {
  console.log('Headers:', req.headers);

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://mdm-test4.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZw0scsbw1PZM4q6tBwv0YNbOS%2FKntoeQ2l31Q%2BH6OzZiTBOVcwmPque4FNDpXg89qrF6HyZa6Tna50c7co4Uu4pQRwGRFdCV48btXTsHKsL0aUoqw%3D%3D&templateToken=162987ec7296d1ee60f3a438f2754261"}]}'
  const inputStream = Buffer.from(responseText);

  const responseHeaders = {
    "Content-Type": "application/json",
    "Content-Length": inputStream.length
  };

  console.log(inputStream.length);
  res.writeHead(200, responseHeaders);

  res.write(inputStream);
  res.end();
});

module.exports = router;
