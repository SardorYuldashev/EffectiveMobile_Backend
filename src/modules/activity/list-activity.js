const db = require('../../db');

const listActivity = async ({ id, page = { limit: 10, offset: 0 }, sort = { by: 'id', order: 'asc' } }) => {
  const dbQuery = db('activity')
    .where({ user_id: id })
    .select();

  const queryClone = db("activity").select("id").where({ user_id: id });

  dbQuery.orderBy(sort.by, sort.order);

  dbQuery.limit(page.limit).offset(page.offset);

  const data = await dbQuery;

  const total = (await queryClone).length;

  return {
    data,
    pageInfo: {
      "total": total,
      "offset": page.offset,
      "limit": page.limit,
    },
  };
};

module.exports = listActivity;