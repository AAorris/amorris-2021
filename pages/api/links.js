import LinkService from '../../../services/links'

export default async (req, res) => {
  const service = new LinkService()
  const links = await service.getAllLinks()
  res.status(200).json({ links })
}