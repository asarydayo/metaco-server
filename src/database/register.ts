import TeamMember from "database/models/team_member";
import Team from "database/models/team";
import User from "database/models/user";
import Tournament from "database/models/tournament";
import TornamentResult from "database/models/tournament_result";

export default function Register() {
  TornamentResult.belongsTo(Tournament, {
    as: "tournament",
    foreignKey: "tournament_id",
  });
  TornamentResult.belongsTo(Team, {
    as: "team",
    foreignKey: "team_id",
  });
  Tournament.hasMany(TornamentResult, {
    as: "results",
    foreignKey: "tournament_id",
  });
  Team.hasMany(TornamentResult, {
    as: "results",
    foreignKey: "team_id",
  });

  Team.belongsTo(Tournament, {
    as: "tournament",
    foreignKey: "tournament_id",
  });
  Tournament.hasMany(Team, {
    as: "teams",
    foreignKey: "tournament_id",
  });

  TeamMember.belongsTo(Team, {
    as: "team",
    foreignKey: "team_id",
  });
  Team.hasMany(TeamMember, {
    as: "members",
    foreignKey: "team_id",
  });

  Team.belongsTo(User, {
    as: "captain",
    foreignKey: "captain_id",
  });

  TeamMember.belongsTo(User, {
    as: "person",
    foreignKey: "user_id",
  });
  User.hasMany(TeamMember, {
    as: "membership",
    foreignKey: "user_id",
  });
}
