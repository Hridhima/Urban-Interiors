const mongoose = require("mongoose")
const UserRegSchema = new mongoose.Schema({
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
	userPassword:{
		type:String,
		required:true,
	},
	userCity:{
		type:String,
		required:true,
	},
	userState:{
		type:String,
		required:true,
	},
	userMessage:{
		type:String,
		required:true,
	}
});
const UserReg = mongoose.model('regdata',UserRegSchema);
module.exports=UserReg;