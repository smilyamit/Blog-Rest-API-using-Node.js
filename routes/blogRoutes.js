const express = require('express');
const blogController = require('../controller/blogController')
const router = express.Router(); 


router.get('/', blogController.blog_index )           //home

router.post('/', blogController.blog_create_post ) // when u click submit it will post to home n db

router.get('/create', blogController.blog_create_get ) // when u click NewBlog on navbar

router.get('/:id', blogController.blog_details )    // when u click any topic inside home

router.delete('/:id', blogController.blog_delete )  // when u clcik delete inside details


module.exports = router