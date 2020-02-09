const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("Hello world...");
});

PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    if(!err)
	console.log("Server started on port : " + PORT);
    else
	console.log("Error : " + JSON.stringify(err, undefined, 2));
});
