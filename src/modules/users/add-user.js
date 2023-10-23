const db = require('../../db');
const { hash } = require('bcryptjs');

const addUser = async (data) => {
  const hashedPassword = await hash(data.password, 10);

  const result = await db('users')
    .insert({ ...data, password: hashedPassword })
    .returning('*');

  await db("activity")
    .insert({ action: "register", user_id: result[0].id })
    .returning("*");

  return result[0];
};

module.exports = addUser;