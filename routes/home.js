const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://mdmqa-lin2.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZw4sM5Ll1DbMtm67kNy1dBaPSvKmtIZRGkm1A2K7e2M2jBIBM0lYavL5wQSrHpj9vrDuizPPKSzZp5I6J9oU74qQBwGRFdCV48btXTsGPlZh6V7rdE%3D&templateToken=eb42a87ecf56e3d1c06354ea152093fb"}]}'
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
