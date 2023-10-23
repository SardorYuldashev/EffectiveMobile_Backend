const db = require('../../db');
const { NotFoundError } = require('../../shared/errors');

const showUser = async ({ id }) => {
  const user = await db('users')
    .where({ id })
    .select('*')
    .first();

  if (!user) {
    throw new NotFoundError('User not found');
  };

  return user;
};

module.exports = showUser;