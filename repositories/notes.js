import removeMarkdown from "remove-markdown";
import toHtml from "marked";

export default class NotesRepository {
  constructor() {
    this.site = process.env.NOTES_SITE;
    this.headers = {
      Authorization: `${process.env.NOTES_EMAIL} ${process.env.NOTES_TOKEN}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      "Cache-Control": "max-age=1, stale-while-revalidate, public",
    };
  }
  async fetchMy(url, options = {}) {
    const resp = await fetch(
      `https://collectednotes.com/sites/${this.site}${url}`,
      {
        ...options,
        headers: { ...this.headers, ...options.headers },
      }
    );
    if (!resp.ok) {
      const { error } = await resp.json();
      throw new Error(error);
    }
    return await resp.json();
  }
  async getLatestNotes(options = {}) {
    const notes = await this.fetchMy(`/notes?page=1`);
    return notes.map(
      ({
        body,
        id,
        site_id,
        user_id,
        updated_at,
        visibility,
        curated,
        url,
        ...note
      }) => {
        const result = { ...note };
        if (options.body === false) return result;

        if (options.contentType === "text/plain") {
          result.body = removeMarkdown(body);
        } else {
          result.body = toHtml(body);
        }

        return result;
      }
    );
  }
  async getNote(path, options = {}) {
    const notes = await this.getLatestNotes(options);
    const [found] = notes.filter((note) => note.path === path);
    if (!found) throw new Error(`Note ${path} not found.`);
    return found;
  }
}
