export default function user(data: any) {
  return {
    id: data.id,
    name: data.name,
    email: data.email,
    coin: data.coin,
    picture: data.picture,
  };
}
