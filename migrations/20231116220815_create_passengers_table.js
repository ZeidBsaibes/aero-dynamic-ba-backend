/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("passengers", (table) => {
    table.increments("passenger_id").primary();
    table.string("name", 255).notNullable();
    table.date("date_of_birth");
    table.string("gender", 10);
    table.text("contact_information"); // Changed from json to text
    table.string("address", 255);
    table.string("passport_number", 20);
    table.string("nationality", 50);
    table.string("frequent_flyer_number", 30);
    table.text("travel_history"); // Changed from json to text
    table.text("payment_information"); // Changed from json to text
    table.text("preferences"); // Changed from json to text
    table.text("special_requirements"); // Changed from json to text
    table.text("emergency_contact"); // Changed from json to text
    table.text("travel_insurance_details"); // Changed from json to text
    table.text("flight_ratings_feedback"); // Changed from json to text
    table.text("baggage_information"); // Changed from json to text
    table.text("booking_history"); // Changed from json to text
    table.integer("loyalty_points");
    table.text("marketing_preferences"); // Changed from json to text
    table.integer("voucher_amount").defaultTo(0);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("passengers");
};
