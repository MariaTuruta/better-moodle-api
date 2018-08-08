const faker = require('faker');

module.exports = {
  // eslint-disable-next-line no-unused-vars, no-use-before-define
  up(queryInterface, Sequelize) { return queryInterface.bulkInsert('courses_teachers', generate50Connections(), {}); },
  // eslint-disable-next-line no-unused-vars
  down(queryInterface, Sequelize) { return queryInterface.bulkDelete('courses_teachers', null, {}); },
};

function generate50Connections() {
  const connections = [];
  for (let i = 0; i <= 10; i += 1) {
    connections.push({
      teacher_id: faker.random.number(49) + 1,
      course_id: faker.random.number(49) + 1,
    });
  }
  return connections;
}
