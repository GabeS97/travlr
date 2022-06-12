
const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { restoreUser } = require('../../utils/auth');
const { Comment, User } = require('../../db/models')

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const comments = await Comment.findAll({
        include: User
    })
    return res.json(comments)
}))

router.post('/', asyncHandler(async (req, res) => {
    const { userId, imageId, comment, title, username } = req.body
    console.log('3. this is the payload sent to backend from thunk: ', req.body)
    const createdComment = await Comment.create({
        userId,
        imageId,
        comment,
        username,
        title
    })
    return res.json(createdComment)
}))

router.put('/:commentId', asyncHandler(async (req, res) => {
    const { commentId } = req.params;
    const { title, comment, userId, imageId } = req.body
    const comments = await Comment.findOne({ where: { id: commentId } })
    comments.update({ title, comment, userId, imageId })
    return res.json(comment)
}))

router.delete('/:commentId', asyncHandler(async (req, res) => {
    const { commentId } = req.params;
    const comment = await Comment.findByPk(commentId)
    comment.destroy()
    return res.json(comment)
}))
module.exports = router
