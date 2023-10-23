const { compare } = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('../../shared/errors');
const config = require('../../shared/config');
const db = require('../../db');

const login = async ({ username, password }) => {
  const existing = await db('users')
    .where({ username })
    .select('id', 'password')
    .first();

  if (!existing) {
    throw new UnauthorizedError('username or password entered incorrectly');
  };

  const passwordCompare = await compare(password, existing.password);

  if (!passwordCompare) {
    throw new UnauthorizedError('username or password entered incorrectly');
  };

  const token = jwt.sign(
    {
      user: {
        id: existing.id
      }
    },
    config.jwt.secret,
    { expiresIn: '1d' },
  );

  await db("activity")
    .insert({ action: "login", user_id: existing.id })
    .returning("*");

  return { token };
};

module.exports = login;