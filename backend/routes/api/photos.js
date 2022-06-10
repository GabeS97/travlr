
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
    console.log(req.body, 'then you are going to follow the trail back to the backend and see if you are getting back what you want');
    const photosPosted = await Photo.create({
        content,
        imageUrl,
        albumId,
        userId
    })

    return res.json(photosPosted)
}))

router.put('/:photoId', asyncHandler(async (req, res) => {
    const { content, image } = req.body
    const { photoId } = req.params

    const photo = await Photo.findOne({ where: { id: photoId } })
    photo.update({ content, image })
    return res.json(photo)
}))
module.exports = router
