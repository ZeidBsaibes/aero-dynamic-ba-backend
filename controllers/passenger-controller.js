const knex = require("knex")(require("../knexfile"));

//get a single passenger by Id

const getPassengerById = async (req, res) => {
  try {
    const data = await knex("passengers")
      .where("passenger_id", req.params.id)
      .first();

    if (!data) {
      return res.status(404).send("passenger does not exist ");
    }

    res.status(200).json(data);
  } catch (error) {
    console.error(passengers);
  }
};

module.exports = {
  getPassengerById,
};
