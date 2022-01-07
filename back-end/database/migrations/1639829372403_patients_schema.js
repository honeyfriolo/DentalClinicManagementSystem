'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PatientsSchema extends Schema {
  up () {
    this.create('patients', (table) => {
      table.increments()
      table.string('name')
      table.integer('age')
      table.string('telephone')
      table.string('date')
      table.string('address')
      table.string('complain')
      table.string('pain')
      table.timestamps()
    })
  }

  down () {
    this.drop('patients')
  }
}

module.exports = PatientsSchema
