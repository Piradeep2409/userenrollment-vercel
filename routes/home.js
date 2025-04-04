const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {
  console.log('Headers:', req.headers);

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://mdm-test4.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZxotphOzVfbMdy7uUoo3oBaNimfyIcZGzJ9iV%2FQ7b%2FS2DBNVsEjM%2F%2FLtwVDqytv9KiRvi3LZfKwbZ8bvMg6Xr8tRRwGRFdCV48btXTsHalYhf4u%2B9Y%3D&templateToken=3126b18b7e2da9dc3a62ec10dc4d0590"}]}'
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
