const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {
  console.log('Headers:', req.headers);

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://mdmqa-lin7.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZxvtssbzQONNYu9vE99h4UJOS2eztsaQGlx1V6DvOuI3zAdX5MqNPuetlYXqShp9qqUuyzBbPHlaM5JvsE9CLktRhwGRFdCV48btXTsTKRc0qV7qIM%3D&templateToken=2828d45e48eef1de91f7d6b41253bef"}]}'
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
