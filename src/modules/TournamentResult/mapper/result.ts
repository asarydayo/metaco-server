import { team } from "modules/Team/mapper";
import { tournament } from "modules/Tournament/mapper";
export default function result(data: any) {
  return {
    id: data.id,
    point: data.point,
    position: data.position,
    team: data.team ? team(data.team) : null,
    tournament: data.tournament ? tournament(data.tournament) : null,
  };
}
