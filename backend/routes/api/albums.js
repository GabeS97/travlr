
const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { restoreUser } = require('../../utils/auth');
const db = require('../../db/models');
const { Album } = db;
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const albums = Album.findAll();
    res.json(albums)
}))

module.exports = router
