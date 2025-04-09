const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {
  console.log('Headers:', req.headers);

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://kalyan-21891.csez.zohocorpin.com:9383/mdm/client/v1/enroll?encapiKey=bc8a2f09&templateToken=1a6d5b14b9b9d44634c92910741c35ce"}]}'
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
