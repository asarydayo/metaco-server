import { user } from "modules/User/mapper";
export default function team(data: any) {
  return {
    id: data.id,
    name: data.name,
    logo: data.logo,
    point: data.dataValues.sumPoints,
    captain: data.captain ? user(data.captain) : null,
  };
}
