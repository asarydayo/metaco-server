"use strict";
const faker = require("faker");
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    var data = [
      {
        id: 111,
        title: "Metaco Tournament Dota 2 #1",
        start_date: "	7/31/2021",
        end_date: "8/1/2021	",
        team_counts: 10,
        slot: 10,
        created_at: "2021-07-15 04:05:23.35+00	",
        updated_at: "2021-07-15 04:05:23.35+00",
      },
      {
        id: 112,
        title: "Metaco Tournament Dota 2 #2",
        start_date: "	8/7/2021",
        end_date: "8/8/2021	",
        team_counts: 10,
        slot: 10,
        created_at: "2021-07-22 04:05:23.35+00	",
        updated_at: "2021-07-22 04:05:23.35+00",
      },
      {
        id: 113,
        title: "Metaco Tournament Dota 2 #3",
        start_date: "	8/14/2021",
        end_date: "8/15/2021",
        team_counts: 10,
        slot: 10,
        created_at: "	2021-07-29 04:05:23.35+00",
        updated_at: "	2021-07-29 04:05:23.35+00",
      },
      {
        id: 114,
        title: "Metaco Tournament Dota 2 #4",
        start_date: "	8/21/2021",
        end_date: "8/22/2021",
        team_counts: 10,
        slot: 10,
        created_at: "	2021-08-05 04:05:23.35+00",
        updated_at: "2021-08-05 04:05:23.35+00",
      },
      {
        id: 115,
        title: "Metaco Tournament Dota 2 #5",
        start_date: "	8/29/2021",
        end_date: "8/29/2021",
        team_counts: 10,
        slot: 10,
        created_at: "	2021-08-12 04:05:23.35+00",
        updated_at: "	2021-08-12 04:05:23.35+00",
      },
    ];
    return await queryInterface.bulkInsert("tournament", data, {});
  },

  down: async (queryInterface, Sequelize) => {},
};
