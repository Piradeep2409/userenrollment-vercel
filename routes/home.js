const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://sampath-13185.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZw4tZ4ZwVWKYt%2B060571oJYNn%2BfyIFNFj9ziQ%2BC6e%2FcizBGBZB3YvjDtAIXrn08oarA73rKbqTgO59IvMA8XbksQRwGRFdCV48btXTsTatZgP4rrA%3D%3D&templateToken=bc6572fa99bbdaccfeb1488e223d5c8"}]}';
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
