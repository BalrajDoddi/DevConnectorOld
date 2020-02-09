const mongoose = require('mongoose');
const config = require('config');

const db = config.get('MongoURI');

const connectDB = async () => {
    try{
	await mongoose.connect(db,{
		useNewUrlParser: true,
		useUnifiedTopology: true
	});

	console.log('MongoDB Connected...');
    } catch(err) {
	console.log("Error : " + JSON.stringify(err, undefined, 2));
	// Exit process with failure
	process.exit(1);
    }
};

module.exports = connectDB;
