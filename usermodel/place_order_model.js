var mongoose= require('mongoose');

var userschema =new mongoose.Schema({
   name:{
    type:String
   },
   p_name:{
    type:String
   },
   qty:{
    type:String
   },
   price:{
    type:String
   },
    mobile:{
        type:String
    },
    delivery_address:{
        type:String
    },
    payment_option:{
        type:String
    },
})
module.exports =mongoose.model("place_order",userschema);