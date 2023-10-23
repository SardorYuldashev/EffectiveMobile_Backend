const db = require('../../db');
const { NotFoundError } = require('../../shared/errors');

const showMe = async ({ id }) => {
  const user = await db('users')
    .where({ id })
    .select("*")
    .first();

  if (!user) {
    throw new NotFoundError('Пользователь не найден');
  };

  return user;
};

module.exports = showMe;