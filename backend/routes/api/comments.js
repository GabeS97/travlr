
const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { restoreUser } = require('../../utils/auth');
const { Comment } = require('../../db/models')

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const comments = await Comment.findAll()
    console.log('3. is our backend comment being fetchde', comments)
    return res.json(comments)
}))

module.exports = router
