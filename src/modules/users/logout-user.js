const db = require('../../db');

const logoutUser = async (id) => {
  const data = await db("activity")
    .insert({ action: "logout", user_id: id })
    .returning("*");

  return data;
};

module.exports = logoutUser;