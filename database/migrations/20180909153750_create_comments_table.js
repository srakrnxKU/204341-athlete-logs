exports.up = function(knex, Promise) {
  return knex.schema.createTable("comments", function(table) {
    table.increments();
    table.integer("news_id");
    table.string("from");
    table.text("comment");
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {};
