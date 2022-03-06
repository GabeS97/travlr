
const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { restoreUser } = require('../../utils/auth');
const { Album } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {

    const albums = await Album.findAll();
    return res.json(albums)
}))

router.post('/', asyncHandler(async (req, res) => {
    const { userId, title, imageUrl, description } = req.body;
    const albums = await Album.create({ userId, title, imageUrl, description })

    return res.json(albums)
}))

router.put('/:albumId', asyncHandler(async (req, res) => {
    const { userId, title, imageUrl, description } = req.body;
    const { albumId } = req.params

    const album = await Album.findOne({ where: { id: albumId } })
    // const album = await Album.findOne()
    album.update({ userId, title, imageUrl, description })
    return res.json(album)
}))

router.delete('/:albumId', asyncHandler(async (req, res) => {
    const { albumId } = req.params
    console.log('2.5. this is the req.body of the delete route: ', albumId)

    const album = await Album.findByPk(albumId)
    console.log('3. this is the albumId for the delete route: ', albumId, 'and this is the req.params for the albumId', req.params.albumId)

    album.destroy()
    return res.json(album)
}))


module.exports = router
