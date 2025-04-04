const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {
  console.log('Headers:', req.headers);

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://mdm-test4.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZxo5MtIkFLQNoq1vUoo1osPaH%2FPnIYXFWx801%2FW7uTehDBNVcMjZv%2BftVBH%2Fndp9P%2FFuS%2Bda6Kyas9KvJw9DOkpQBwGRFdCV48btXTsGa0Fgf8q%2Fdc%3D&templateToken=3a8734e8e15d10d87dbaf832422fff46"}]}'
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
