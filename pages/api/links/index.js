import LinkService from '../../../services/links'

export default async (req, res) => {
  const service = new LinkService()
  const links = await service.getAllLinks()
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate, public')
  res.status(200).json({ links })
}