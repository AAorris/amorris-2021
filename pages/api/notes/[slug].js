import NotesService from '../../../services/notes'

export default async (req, res) => {
  const service = new NotesService()
  const note = await service.getNote(req.query.slug)
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate, public')
  res.status(200).json({note})
}