import { membership } from "modules/TeamMember/mapper";
export default function userWithTeam(data: any) {
  return {
    id: data.id,
    name: data.name,
    email: data.email,
    coin: data.coin,
    picture: data.picture,
    membership: data.membership ? membership(data.membership) : null,
  };
}
