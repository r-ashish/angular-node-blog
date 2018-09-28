const app = require('express');
const router = new app.Router();
const posts = require('../controllers/posts.controller');

// router.get('/posts', file.uploadFile);
// router.put('/posts', posts.updatePost);
router.post('/posts', posts.createPost);

module.exports = router;