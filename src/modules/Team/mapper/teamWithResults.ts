import { user } from "modules/User/mapper";
import { membership } from "modules/TeamMember/mapper";
import { result } from "modules/TournamentResult/mapper";
import { tournament } from "modules/Tournament/mapper";
export default function teamWithResults(data: any) {
  return {
    id: data.id,
    name: data.name,
    logo: data.logo,
    point: data.dataValues.sumPoints,
    captain: data.captain ? user(data.captain) : null,
    members: data.members
      ? data.members.map((item: any) => membership(item))
      : null,
    results: data.results
      ? data.results.map((item: any) => {
          return result(item);
        })
      : null,
    tournament: data.tournament ? tournament(data.tournament) : null,
    // ...data.previos
  };
}
