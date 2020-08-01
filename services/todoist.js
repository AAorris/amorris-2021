export class SimpleTodoistService {
  constructor(project) {
    this.token = process.env.TODOIST_TOKEN;
    this.project = project;
  }
  async getAllTodos() {
    const resp = await fetch(
      `https://api.todoist.com/rest/v1/tasks?project_id=${this.project}`,
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
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
