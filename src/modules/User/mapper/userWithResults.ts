import { membershipWithResult } from "modules/TeamMember/mapper";
export default function userWithResults(data: any) {
  return {
    id: data.id,
    name: data.name,
    email: data.email,
    coin: data.coin,
    picture: data.picture,
    membership: data.membership
      ? data.membership.map((item: any) => membershipWithResult(item))
      : null,
  };
}
