const express = require('express');
const { Op } = require('sequelize');
const asyncHandler = require('express-async-handler');
const { Album, Photo, User } = require('../../db/models');
const router = express.Router();

router.get('/:searchQuery',
    asyncHandler(async (req, res, next) => {
        const searchQuery = req.params.searchQuery
        const searchResult = await Photo.findAll({
            where: {
                tags: { [Op.contains]: [searchQuery] }
            },
            include: [
                { model: User },
                { model: Album }
            ]
        })
        return res.json(searchResult)
    }))

module.exports = router
