
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


module.exports = router
