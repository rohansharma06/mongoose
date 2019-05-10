const mongoose=require('mongoose');
const schema=mongoose.Schema;

var commentschema=new schema({
    rating:{
        type:Number,
        max:5,
        min:1,
        require:true
    },
    comment:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    }
},{
 timestamp:true
});

var dishschema=new schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    description:{
        type:String,
        require:true
    },
    comments:[commentschema]
},{
    timestamp:true
});

var Dishes=mongoose.model('Dish',dishschema);
module.exports=Dishes;