/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('activity').del()
  await knex('activity').insert([
    {
      // id: 1,
      user_id: 1,
      action: "register"
    },
    {
      // id: 2,
      user_id: 2,
      action: "register"
    },
    {
      // id: 3,
      user_id: 3,
      action: "register"
    },
    {
      // id: 4,
      user_id: 4,
      action: "register"
    },
    {
      // id: 5,
      user_id: 5,
      action: "register"
    },
    {
      // id: 6,
      user_id: 6,
      action: "register"
    },
    {
      // id: 7,
      user_id: 7,
      action: "register"
    },
    {
      // id: 8,
      user_id: 8,
      action: "register"
    },
    {
      // id: 9,
      user_id: 9,
      action: "register"
    },
    {
      // id: 10,
      user_id: 10,
      action: "register"
    },
    {
      // id: 11,
      user_id: 11,
      action: "register"
    },
    {
      // id: 12,
      user_id: 12,
      action: "register"
    },
    {
      // id: 13,
      user_id: 13,
      action: "register"
    },
    {
      // id: 14,
      user_id: 14,
      action: "register"
    },
    {
      // id: 15,
      user_id: 15,
      action: "register"
    },
    {
      // id: 16,
      user_id: 16,
      action: "register"
    },
    {
      // id: 17,
      user_id: 17,
      action: "register"
    },
    {
      // id: 18,
      user_id: 18,
      action: "register"
    },
    {
      // id: 19,
      user_id: 19,
      action: "register"
    },
    {
      // id: 20,
      user_id: 20,
      action: "register"
    },
    {
      // id: 21,
      user_id: 21,
      action: "register"
    },
    {
      // id: 22,
      user_id: 22,
      action: "register"
    },
    {
      // id: 23,
      user_id: 23,
      action: "register"
    },
    {
      // id: 24,
      user_id: 24,
      action: "register"
    },
    {
      // id: 25,
      user_id: 25,
      action: "register"
    },
    {
      // id: 26,
      user_id: 1,
      action: "login"
    },
    {
      // id: 27,
      user_id: 1,
      action: "edit"
    },
    {
      // id: 28,
      user_id: 1,
      action: "edit"
    },
    {
      // id: 29,
      user_id: 1,
      action: "edit"
    },
    {
      // id: 30,
      user_id: 1,
      action: "logout"
    },
    {
      // id: 31,
      user_id: 1,
      action: "login"
    },
    {
      // id: 32,
      user_id: 1,
      action: "logout"
    },
    {
      // id: 33,
      user_id: 1,
      action: "login"
    },
    {
      // id: 34,
      user_id: 1,
      action: "logout"
    },
    {
      // id: 35,
      user_id: 1,
      action: "login"
    },
    {
      // id: 36,
      user_id: 1,
      action: "edit"
    },
    {
      // id: 37,
      user_id: 1,
      action: "edit"
    },
    {
      // id: 38,
      user_id: 1,
      action: "edit"
    },
    {
      // id: 39,
      user_id: 1,
      action: "logout"
    },
    {
      // id: 40,
      user_id: 1,
      action: "login"
    },
    {
      // id: 41,
      user_id: 1,
      action: "logout"
    },
    {
      // id: 42,
      user_id: 2,
      action: "login"
    },
    {
      // id: 43,
      user_id: 2,
      action: "edit"
    },
    {
      // id: 44,
      user_id: 2,
      action: "edit"
    },
    {
      // id: 45,
      user_id: 2,
      action: "edit"
    },
    {
      // id: 46,
      user_id: 2,
      action: "logout"
    },
    {
      // id: 47,
      user_id: 2,
      action: "login"
    },
    {
      // id: 48,
      user_id: 2,
      action: "logout"
    },
    {
      // id: 49,
      user_id: 2,
      action: "login"
    },
    {
      // id: 50,
      user_id: 2,
      action: "logout"
    },
    {
      // id: 51,
      user_id: 2,
      action: "login"
    },
    {
      // id: 52,
      user_id: 2,
      action: "edit"
    },
    {
      // id: 53,
      user_id: 2,
      action: "edit"
    },
    {
      // id: 54,
      user_id: 2,
      action: "edit"
    },
    {
      // id: 55,
      user_id: 2,
      action: "logout"
    },
    {
      // id: 56,
      user_id: 2,
      action: "login"
    },
    {
      // id: 57,
      user_id: 2,
      action: "logout"
    },
    {
      // id: 58,
      user_id: 3,
      action: "login"
    },
    {
      // id: 59,
      user_id: 3,
      action: "edit"
    },
    {
      // id: 60,
      user_id: 3,
      action: "logout"
    },
    {
      // id: 61,
      user_id: 1,
      action: "login"
    },
    {
      // id: 62,
      user_id: 1,
      action: "edit"
    },
    {
      // id: 63,
      user_id: 1,
      action: "edit"
    },
    {
      // id: 64,
      user_id: 1,
      action: "edit"
    },
    {
      // id: 65,
      user_id: 1,
      action: "logout"
    },
    {
      // id: 66,
      user_id: 1,
      action: "login"
    },
    {
      // id: 67,
      user_id: 1,
      action: "logout"
    },
    {
      // id: 68,
      user_id: 1,
      action: "login"
    },
    {
      // id: 69,
      user_id: 1,
      action: "logout"
    },
    {
      // id: 70,
      user_id: 1,
      action: "login"
    },
    {
      // id: 71,
      user_id: 1,
      action: "edit"
    },
    {
      // id: 72,
      user_id: 1,
      action: "edit"
    },
    {
      // id: 73,
      user_id: 1,
      action: "edit"
    },
    {
      // id: 74,
      user_id: 1,
      action: "logout"
    },
    {
      // id: 75,
      user_id: 1,
      action: "login"
    },
    {
      // id: 76,
      user_id: 1,
      action: "logout"
    },
  ]);
};
