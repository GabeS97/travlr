
const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { restoreUser } = require('../../utils/auth');
const { Comment } = require('../../db/models')

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const comments = await Comment.findAll()
    return res.json(comments)
}))

router.put('/:commentId', asyncHandler(async (req, res) => {
    const { commentId } = req.params;
    const comment = await findByPk(commentId)
    return res.json(comment)
}))

module.exports = router
