const db = require('../db')

exports.getAll = () => {
	return new Promise((resolve, reject) => {
    db.query('SELECT * FROM notes', (error, results) => {
      if (error) { return reject(error) }
      resolve(results)
    })
  })
}
