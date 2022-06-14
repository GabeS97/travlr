const express = require('express');
const { Op } = require('sequelize');
const asyncHandler = require('express-async-handler');
const { Album, Photo, User } = require('../../db/models');
const router = express.Router();

router.get('/',
    asyncHandler(async (req, res) => {
        const { search_input } = req.query
        const searchResult = await Photo.findAll({
            where: {
                [Op.or]: { tags: { [Op.like]: search_input } }
            },
        })

        return res.json(searchResult)
    }))

module.exports = router
