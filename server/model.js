const mongoose=require("mongoose")
const { Schema } = mongoose;

const MyModel = mongoose.model('LedTv', new Schema({ 
      Name:String  , 
      Brand : String , 
      Mrp : Number , 
      DiscPrice: Number,
      Discount : String,
      Ranking : Number,
      Rating : Number,
      Img : String

}),"ledtv");

module.exports=MyModel;