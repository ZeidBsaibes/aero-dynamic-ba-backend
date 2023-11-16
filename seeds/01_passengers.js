exports.seed = function (knex) {
  // Creates an object representing a single passenger record
  const passengerData = {
    name: "John Doe",
    date_of_birth: "1980-01-01",
    gender: "Male",
    contact_information: "Email: john.doe@example.com, Phone: 1234567890",
    address: "123 Main St, Anytown, USA",
    passport_number: "A12345678",
    nationality: "American",
    frequent_flyer_number: "FF12345",
    travel_history: "Visited: Paris, New York, Tokyo",
    payment_information: "Card Number: 1234567890123456, Expiry: 12/25",
    preferences: "Seat Preference: Window, Meal Preference: Vegetarian",
    special_requirements: "Requires Wheelchair Assistance",
    emergency_contact: "Emergency Contact: Jane Doe, Phone: 0987654321",
    travel_insurance_details:
      "Insurance Provider: InsureTravel, Policy Number: XYZ123",
    flight_ratings_feedback: "Flight Number: AB123, Rating: 4",
    baggage_information: "Checked Bags: 2, Carry-On Bags: 1",
    booking_history: "Previous Bookings: Flight AB123, Flight XY456",
    loyalty_points: 150,
    marketing_preferences: "Prefers Email Communication, No SMS",
    voucher_amount: 50,
  };

  // Deletes ALL existing entries and inserts the new record
  return knex("passengers")
    .del()
    .then(function () {
      return knex("passengers").insert(passengerData);
    });
};
