const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://mdm-test4.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZxvsslPk1HRZtrpvh9z3oJYbCqYwNMXQD51gVmCsuTa3zBPBsFwZvjP5VBBpH84pv%2FAvSiaa%2Fe%2BZ5ke7Z9vXushQRwGRFdCV48btXTsT6kMgPN5poM%3D&templateToken=760c067dfcc266fcc3e0c53d55eb2ab3"}]}'
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
