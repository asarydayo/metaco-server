import { user } from "modules/User/mapper";
import { teamWithResults } from "modules/Team/mapper";

export default function membership(data: any) {
  return {
    id: data.id,
    user: data.person ? user(data.person) : null,
    team: data.team ? teamWithResults(data.team) : null,
    roles: data.logo,
    ingame_id: data.ingame_id,
  };
}
