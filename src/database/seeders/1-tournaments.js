"use strict";
const dayjs = require("dayjs");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    var data = [
      {
        id: 111,
        title: "Metaco Tournament Dota 2 #1",
        start_date: dayjs("	7/31/2021").format("YYYY-MM-DD hh:mm:ss"),
        end_date: dayjs("8/1/2021	").format("YYYY-MM-DD hh:mm:ss"),
        team_counts: 10,
        slot: 10,
        created_at: dayjs("2021-07-15 04:05:23.35+00	").format(
          "YYYY-MM-DD hh:mm:ss"
        ),
        updated_at: dayjs("2021-07-15 04:05:23.35+00").format(
          "YYYY-MM-DD hh:mm:ss"
        ),
      },
      {
        id: 112,
        title: "Metaco Tournament Dota 2 #2",
        start_date: dayjs("	8/7/2021").format("YYYY-MM-DD hh:mm:ss"),
        end_date: dayjs("8/8/2021	").format("YYYY-MM-DD hh:mm:ss"),
        team_counts: 10,
        slot: 10,
        created_at: dayjs("2021-07-22 04:05:23.35+00	").format(
          "YYYY-MM-DD hh:mm:ss"
        ),
        updated_at: dayjs("2021-07-22 04:05:23.35+00").format(
          "YYYY-MM-DD hh:mm:ss"
        ),
      },
      {
        id: 113,
        title: "Metaco Tournament Dota 2 #3",
        start_date: dayjs("	8/14/2021").format("YYYY-MM-DD hh:mm:ss"),
        end_date: dayjs("8/15/2021").format("YYYY-MM-DD hh:mm:ss"),
        team_counts: 10,
        slot: 10,
        created_at: dayjs("	2021-07-29 04:05:23.35+00").format(
          "YYYY-MM-DD hh:mm:ss"
        ),
        updated_at: dayjs("	2021-07-29 04:05:23.35+00").format(
          "YYYY-MM-DD hh:mm:ss"
        ),
      },
      {
        id: 114,
        title: "Metaco Tournament Dota 2 #4",
        start_date: dayjs("	8/21/2021").format("YYYY-MM-DD hh:mm:ss"),
        end_date: dayjs("8/22/2021").format("YYYY-MM-DD hh:mm:ss"),
        team_counts: 10,
        slot: 10,
        created_at: dayjs("	2021-08-05 04:05:23.35+00").format(
          "YYYY-MM-DD hh:mm:ss"
        ),
        updated_at: dayjs("2021-08-05 04:05:23.35+00").format(
          "YYYY-MM-DD hh:mm:ss"
        ),
      },
      {
        id: 115,
        title: "Metaco Tournament Dota 2 #5",
        start_date: dayjs("	8/29/2021").format("YYYY-MM-DD hh:mm:ss"),
        end_date: dayjs("8/29/2021").format("YYYY-MM-DD hh:mm:ss"),
        team_counts: 10,
        slot: 10,
        created_at: dayjs("	2021-08-12 04:05:23.35+00").format(
          "YYYY-MM-DD hh:mm:ss"
        ),
        updated_at: dayjs("	2021-08-12 04:05:23.35+00").format(
          "YYYY-MM-DD hh:mm:ss"
        ),
      },
    ];
    return await queryInterface.bulkInsert("tournament", data, {});
  },

  down: async (queryInterface, Sequelize) => {},
};
