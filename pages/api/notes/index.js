import NotesService from '../../../services/notes'

export default async (req, res) => {
  const service = new NotesService()
  const notes = await service.getLatestNotes({body: false})
  res.setHeader('Cache-Control', 's-maxage=1, max-age=1, stale-while-revalidate, public')
  res.status(200).json({ notes })
}