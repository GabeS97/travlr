
const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { restoreUser } = require('../../utils/auth');
const { Photo, User, Album } = require('../../db/models')

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");

const {
    singleMulterUpload,
    singlePublicFileUpload,
    multipleMulterUpload,
    multiplePublicFileUpload,
} = require("../../awsS3");

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const photos = await Photo.findAll({
        include: User
    })

    return res.json(photos)
}))

router.post(
    '/',
    singleMulterUpload('image'),
    asyncHandler(async (req, res) => {
        const { content, albumId, userId, username} = req.body;
        const imageUrl = await singlePublicFileUpload(req.file)
        const photosPosted = await Photo.create({
            content,
            imageUrl,
            albumId,
            userId,
            tags,
            username
        })
        return res.json(photosPosted)
    }))

router.put('/:photoId',
    singleMulterUpload("image"),
    asyncHandler(async (req, res) => {
        const { content, albumId, userId, tags } = req.body
        const { photoId } = req.params
        const photo = await Photo.findOne({ where: { id: photoId } }
        )
        photo.update({ content, albumId, userId, tags})
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
    const photo = await Photo.findByPk(photoId, {
        include: Album
    })
    return res.json(photo)
}))

module.exports = router
