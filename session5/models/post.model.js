const mongoose = require('mongoose')



const Post = mongoose.model('Post', {
    title:{
        type:String,
        required:[true, 'must have a title']
    },
    content:{
        type:String,

        required:true,
        required:[true, 'must have a content']
   
    },
    status:{
        type:Boolean,
        default:true
    },
  

    
})
module.exports=Post