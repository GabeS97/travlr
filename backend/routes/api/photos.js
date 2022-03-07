
const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { restoreUser } = require('../../utils/auth');
const { Photo } = require('../../db/models')
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const photos = await Photo.findAll()

    return res.json(photos)
}))

router.post('/', asyncHandler(async (req, res) => {
    const { content, imageUrl, albumId, userId } = req.body;
    const photosPosted = await Photo.create({
        content,
        imageUrl,
        albumId,
        userId
    })

    return res.json(photosPosted)
}))
module.exports = router
