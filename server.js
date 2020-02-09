const express = require("express");
const connectDB = require('./config/db');

const app = express();

// Connection to Database
connectDB();

app.get('/', (req, res) => { res.send("Hello world..."); });

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    if(!err)
	console.log("Server started on port : " + PORT);
    else
	console.log("Error : " + JSON.stringify(err, undefined, 2));
});
