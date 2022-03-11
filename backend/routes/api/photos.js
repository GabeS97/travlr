
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

router.put('/:photoId', asyncHandler(async (req, res) => {
    const { content, imageUrl, userId, albumId } = req.body
    console.log(req.body)
    const { photoId } = req.params

    const photo = await Photo.findOne({ where: { id: photoId } })
    photo.update({ content, imageUrl, albumId, userId })
    return res.json(photo)
}))

router.delete('/:photoId', asyncHandler(async (req, res) => {
    const { photoId } = req.params;

    const photo = await Photo.findByPk(photoId)

    photo.destroy();
    return res.json(photo)
}))

router.get('/:photoId', asyncHandler(async (req, res) => {
    const { photoId } = req.params
    const photo = await Photo.findByPk(photoId)
    return res.json(photo)
}))

module.exports = router
