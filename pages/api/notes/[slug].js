import NoteRepository from "repositories/notes";

export default async function getNote(req, res) {
  const note = await new NoteRepository().getNote(req.query.slug, {
    contentType: "text/plain",
  });
  const body = note.body;
  res.writeHead(200, "OK", {
    "Content-Type": "text/plain; charset=utf-8",
    "Cache-Control":
      "max-age=36000, s-maxage=3600, public, stale-while-revalidate",
  });
  res.end(body);
}
