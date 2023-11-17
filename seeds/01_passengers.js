/**
 * Seed data for the 'passengers' table.
 *
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("passengers").del();

  // Inserts seed entries
  await knex("passengers").insert([
    {
      first_name: "John",
      last_name: "Doe",
      original_departure: "2023-01-01",
      voucher_id: 876543245,
      voucher_expiry: "2023-12-31",
      date_of_birth: "1990-01-01",
      gender: "Male",
      contact_information: "Contact info here",
      address: "123 Main St, Anytown, AN 12345",
      passport_number: "A12345678",
      nationality: "American",
      frequent_flyer_number: "FF1234567",
      travel_history: "Travel history here",
      payment_information: "Payment info here",
      preferences: "Preferences here",
      special_requirements: "Special requirements here",
      emergency_contact: "Emergency contact details",
      travel_insurance_details: "Insurance details here",
      flight_ratings_feedback: "Feedback here",
      baggage_information: "Baggage info here",
      booking_history: "Booking history here",
      loyalty_points: 500,
      marketing_preferences: "Marketing preferences here",
      voucher_amount: 300,
    },
    // Add more entries as needed
  ]);
};
