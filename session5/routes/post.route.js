const express= require('express')
const router = express.Router()
const postController = require('../controller/post.controller')

router.post('/add', postController.add)
router.get('/posts', postController.allPosts)
router.get('/post/:id', postController.singlePost)
router.delete('/posts/:id', postController.deletePost)

module.exports= router