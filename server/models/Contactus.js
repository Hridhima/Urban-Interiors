const mongoose = require("mongoose")
const ContactSchema = new mongoose.Schema({
	userName:{
		type:String,
		required:true,
	},
	userEmail:{
		type:String,
		unique:true,
		required:true,
	},
	userPhone:{
		type:String,
		required:true,
	},
	userSubject:{
		type:String,
		required:true,
	},
	userMessage:{
		type:String,
		required:true,
	}
});
const Contact = mongoose.model('contact',ContactSchema);
module.exports=Contact;