const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {
  console.log('Headers:', req.headers);

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://mdmqa-lin7.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZxutJ4elATYMNzu6E8rhNJfNi%2Bfy9EYF2gggAjSvbrfiDAeVM0hYv3I4gwRqi9sparHvi3BOKK%2BOJxPu5htDL4rRRwGRFdCV48btXTsHfxZhqUn%2Fdc%3D&templateToken=2280ef83d6028110b0eb4a6ae11f5822"}]}'
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
