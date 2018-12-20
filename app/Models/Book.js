'use strict'

const Model = use('Model')

class Book extends Model {
  static get table () {
    return 'books'
  }

  static get primaryKey () {
    return 'id'
  }
}

module.exports = Book