const project = "2240435802";
const token = process.env.TODOIST_TOKEN;

export function ago(val) {
  val = 0 | ((Date.now() - val) / 1000);
  var unit,
    length = {
      second: 60,
      minute: 60,
      hour: 24,
      day: 7,
      week: 4.35,
      month: 12,
      year: 10000,
    },
    result;

  for (unit in length) {
    result = val % length[unit];
    if (!(val = 0 | (val / length[unit])))
      return result + " " + (result - 1 ? unit + "s" : unit);
  }
}

export default class TodoService {
  async getAllTodos() {
    const resp = await fetch(
      `https://api.todoist.com/rest/v1/tasks?project_id=${project}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Cache-Control":
            "max-age=3, s-maxage=3600, public, stale-while-revalidate",
        },
      }
    );
    if (!resp.ok) {
      throw new Error(await resp.text());
    }
    return await resp.json();
  }
}
