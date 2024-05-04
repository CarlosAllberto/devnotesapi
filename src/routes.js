const express = require('express')
const router = express.Router()
const noteController = require('./controllers/noteController')

router.get('/ping', (req, res) => res.send({ pong: true }))
router.get('/notes', noteController.all)
router.get('/notes/:id', noteController.one)
router.post('/notes', noteController.new)
router.put('/notes/:id', noteController.edit)
router.delete('/notes/:id', noteController.delete)

module.exports = router
