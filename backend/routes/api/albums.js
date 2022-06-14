const express = require('express')
const asyncHandler = require('express-async-handler');
const { Album, Photo } = require('../../db/models');
const router = express.Router();

// Load all Album
router.get('/', asyncHandler(async (req, res) => {

    const albums = await Album.findAll({
        include: Photo
    });
    return res.json(albums)
}))

// Post Album
router.post('/', asyncHandler(async (req, res) => {
    const { userId, title, imageUrl, description } = req.body;
    const album = await Album.create({ userId, title, imageUrl, description })

    return res.json(album)
}))

// Edit Album
router.put('/:albumId', asyncHandler(async (req, res) => {
    const { userId, title, imageUrl, description } = req.body;
    const { albumId } = req.params

    const album = await Album.findOne({ where: { id: albumId } })
    album.update({ userId, title, imageUrl, description })
    return res.json(album)
}))

// Delete Album
router.delete('/:albumId', asyncHandler(async (req, res) => {
    const { albumId } = req.params

    const album = await Album.findByPk(albumId)

    album.destroy();
    return res.json(album)
}))

// Get single Album
router.get('/:albumId', asyncHandler(async (req, res) => {
    const { albumId } = req.params

    const album = await Album.findByPk(albumId)
    return res.json(album)
}))


module.exports = router
