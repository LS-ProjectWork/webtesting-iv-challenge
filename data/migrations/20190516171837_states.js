exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('states', table => {
      table.increments()

      table.string('state').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('states')
};
