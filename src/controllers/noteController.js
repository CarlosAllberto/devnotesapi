const NoteService = require('../services/NoteService')

exports.all = async (req, res) => {
	let notes = await NoteService.getAll()
	res.send(notes)
}

exports.one = (req, res) => {
	res.send({ msg: 'ok' })
}

exports.new = (req, res) => {
	res.send({ msg: 'ok' })
}

exports.edit = (req, res) => {
	res.send({ msg: 'ok' })
}

exports.delete = (req, res) => {
	res.send({ msg: 'ok' })
}
