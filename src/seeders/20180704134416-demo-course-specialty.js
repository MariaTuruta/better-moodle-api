const faker = require('faker');

module.exports = {
  // eslint-disable-next-line no-unused-vars, no-use-before-define
  up(queryInterface, Sequelize) { return queryInterface.bulkInsert('courses_specialties', generate50Connections(), {}); },
  // eslint-disable-next-line no-unused-vars
  down(queryInterface, Sequelize) { return queryInterface.bulkDelete('courses_specialties', null, {}); },
};

function generate50Connections() {
  const connections = [];
  for (let i = 0; i <= 10; i += 1) {
    connections.push({
      id_specialty: faker.random.number(49) + 1,
      id_course: faker.random.number(49) + 1,
    });
  }
  return connections;
}