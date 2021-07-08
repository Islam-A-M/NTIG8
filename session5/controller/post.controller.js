const postModel = require('../models/post.model')

add = async(req,res)=>{
    try{
        const postData = new postModel(req.body)
        await postData.save()
        res.status(200).send({
            apiStatus: true,
            message: " data inserted",
            data: userData
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            message: "error inserting data",
            data: e
        })
    }
}
allPosts=  async(req,res)=>{
    try{
        const data = await postModel.find()
        res.status(200).send({
            apiStatus:true,
            message:"data retrived",
            data: data,
            count: data.length
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            message:"error loading data",
            data: e
        })
    }
}
singlePost = async(req,res)=>{
    try{
        const id = req.params.id
        const data = await postModel.findById(id)
        if(!data){
            res.status(404).send({
                apiStatus:true,
                message:"post not found",
                data: null
            })
        }
        res.status(200).send({
            apiStatus:true,
            message:"data retrived",
            data: data
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            message:"error loading data",
            data: e
        })
    }
}
deletePost = async(req,res)=>{
    try{
        const id = req.params.id
        const data = await postModel.findByIdAndDelete(id)
        if(!data){
            res.status(404).send({
                apiStatus:true,
                message:"post not found",
                data: null
            })
        }
        res.status(200).send({
            apiStatus:true,
            message:"post deleted",
            data: data
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            message:"error loading data",
            data: e
        })
    }
}

module.exports = { add, allPosts, singlePost, deletePost }
