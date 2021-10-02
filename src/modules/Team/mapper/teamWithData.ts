import { user } from "modules/User/mapper";
import { tournament } from "modules/Tournament/mapper";
import { membership } from "modules/TeamMember/mapper";
export default function teamWithData(data: any) {
  return {
    id: data.id,
    name: data.name,
    logo: data.logo,
    sumPoint: data.sumPoints,
    captain: data.captain ? user(data.captain) : null,
    members: data.members
      ? data.members.map((item: any) => membership(item))
      : null,
    tournament: data.tournament ? tournament(data.tournament) : null,
  };
}
