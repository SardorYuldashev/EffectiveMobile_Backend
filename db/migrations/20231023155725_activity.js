/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('activity', (table) => {
    table.increments('id');
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').notNullable();
    table.enum('action', ['register', 'login', 'logout', 'edit']).notNullable();
    table.timestamp('time').defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('activity');
};
