'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PatientsSchema extends Schema {
  up () {
    this.create('patients', (table) => {
      table.increments()
      table.timestamps()
      table
    })
  }

  down () {
    this.drop('patients')
  }
}

module.exports = PatientsSchema
