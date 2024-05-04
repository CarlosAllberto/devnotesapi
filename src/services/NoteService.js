const db = require('../db')

exports.getAll = () => {
	return new Promise((resolve, reject) => {
		db.query('SELECT * FROM notes', (error, results) => {
			if (error) return reject(error)
			resolve(results)
		})
	})
}

exports.findById = id => {
	return new Promise((resolve, reject) => {
		db.query('SELECT * FROM notes WHERE ID = ?', [id], (error, results) => {
			if (error) return reject(error)
			if (results.length > 0) return resolve(results[0])
			resolve(false)
		})
	})
}

exports.add = (title, body) => {
	return new Promise((resolve, reject) => {
		db.query('INSERT INTO notes (title, body) VALUES (?, ?)', [title, body], (error, results) => {
			if (error) return reject(error)
			resolve(results.insertId)
		})
	})
}

exports.update = (id, title, body) => {
	return new Promise((resolve, reject) => {
		db.query('UPDATE notes SET title = ?, body = ? WHERE id = ?', [title, body, id], (error, results) => {
			if (error) return reject(error)
			resolve(results)
		})
	})
}

exports.delete = id => {
	return new Promise((resolve, reject) => {
		db.query('DELETE FROM notes WHERE id = ?', [id], (error, results) => {
			if (error) return reject(error)
			resolve(results)
		})
	})
}
