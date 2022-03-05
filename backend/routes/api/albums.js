
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
    console.log('2.5. this is the req.body of the PUT route: ', req.body)
    const { albumId } = req.params
    console.log('3. this is the albumId for the PUT route: ', albumId, 'and this is the req.params for the albumId', req.params.albumId)

    const album = await Album.findOne({ where: { id: albumId } })
    // const album = await Album.findOne()
    album.update({ userId, title, imageUrl, description })
    return res.json(album)
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    console.log('this is the req.params for the delete route in the backend', req.body)
    const albumId = await Album.findByPk(req.body)
    albumId.destroy()
    return res.json(albumId)
}))


module.exports = router
