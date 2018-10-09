exports.up = function(knex, Promise) {
  return knex.schema.createTable("news", function(table) {
    table.increments();
    table.string("headline");
    table.text("contents");
    table.integer("gold_count");
    table.integer("silver_count");
    table.integer("bronze_count");
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("news");
};
