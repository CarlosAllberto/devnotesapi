const NoteService = require('../services/NoteService')

exports.all = async (req, res) => {
	let json = { error: '', result: [] }
	let notes = await NoteService.getAll()
	json.result.push(notes)
	res.send(json)
}

exports.one = async (req, res) => {
	let json = { error: '', result: [] }
	let id = req.params.id
	let notes = await NoteService.findById(id)
	json.result.push(notes)
	res.send(json)
}

exports.new = async (req, res) => {
	let json = { error: '', result: {} }
	let { title, body } = req.body

	if (title && body) {
		let noteId = await NoteService.add(title, body)
		json.result = {
			id: noteId,
			title,
			body,
		}
	} else {
		json.error = 'Campos não enviados'
	}
	res.send(json)
}

exports.edit = async (req, res) => {
	let json = { error: '', result: {} }
	let id = req.params.id
	let { title, body } = req.body

	if (id && title && body) {
		let noteId = await NoteService.update(id,title, body)
		json.result = {
			id: noteId,
			title,
			body,
		}
	} else {
		json.error = 'Campos não enviados'
	}
	res.send(json)
}

exports.delete = async (req, res) => {
	let json = { error: '', result: {} }

	await NoteService.delete(req.params.id)

	res.send(json)
}
