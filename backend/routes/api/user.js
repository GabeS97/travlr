
const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    console.log(res, '<<<<<<<<<<<<<<<<<<<<<')
    const users = await User.findAll()

    return res.json(users)

}))

module.exports = router
