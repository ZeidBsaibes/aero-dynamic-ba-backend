exports.seed = function (knex) {
  // Define the array of passenger data
  const passengerData = [
    {
      name: "John Doe",
      date_of_birth: "1980-01-01",
      gender: "Male",
      contact_information: JSON.stringify({
        email: "john.doe@example.com",
        phone: "1234567890",
      }),
      address: "123 Main St, Anytown, USA",
      passport_number: "A12345678",
      nationality: "American",
      frequent_flyer_number: "FF12345",
      travel_history: JSON.stringify(["Paris", "New York", "Tokyo"]),
      payment_information: JSON.stringify({
        card_number: "1234567890123456",
        expiry: "12/25",
      }),
      preferences: JSON.stringify({ seat: "Window", meal: "Vegetarian" }),
      special_requirements: JSON.stringify({ assistance: "Wheelchair" }),
      emergency_contact: JSON.stringify({
        name: "Jane Doe",
        phone: "0987654321",
      }),
      travel_insurance_details: JSON.stringify({
        provider: "InsureTravel",
        policy_number: "XYZ123",
      }),
      flight_ratings_feedback: JSON.stringify({
        flight_no: "AB123",
        rating: 4,
      }),
      baggage_information: JSON.stringify({ checked: 2, carry_on: 1 }),
      booking_history: JSON.stringify(["Flight AB123", "Flight XY456"]),
      loyalty_points: 150,
      marketing_preferences: JSON.stringify({ email: true, sms: false }),
      voucher_amount: 50,
    },
    // ... more records
  ];

  // Deletes ALL existing entries
  return knex("passengers")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("passengers").insert(passengerData);
    });
};
