import dayjs from "dayjs";

export default function tournament(data: any) {
  return {
    id: data.id,
    start_date: dayjs(data.start_date).isValid()
      ? dayjs(data.start_date).format("YYYY-MM-DD hh:mm:ss")
      : data.start_date,
    end_date: dayjs(data.end_date).isValid()
      ? dayjs(data.end_date).format("YYYY-MM-DD hh:mm:ss")
      : data.end_date,
    team_counts: data.team_counts,
    title: data.title,
    slot: data.slot,
  };
}
