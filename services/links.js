const _base = require('airtable').base('appaKRf92yu31M3Nf');
const tagLookup = {}
const links = []

async function buildTags() {
  if (Object.keys(tagLookup).length > 0) return;
  const tags = _base('Tags')
  const selection = tags.select({})
  const iteration = selection.eachPage((records, next) => {
    for (let value of records) {
      tagLookup[value.id] = value.get('name')
    }
    next()
  })
  await iteration
  tagLookup._built = true
}

async function buildLinks() {
  if (links.length > 0) return;
  const _links = _base('Links')
  const selection = _links.select({view: 'Web'})
  const iteration = selection.eachPage((records, next) => {
    for (let value of records) {
      links.push({
        uid: value.get('uri'),
        arg: value.get('url'),
        quicklookurl: value.get('url'),
        subtitle: value.get('subtitle'),
        title: value.get('uri'),
        tags: (value.get('tags')||[]).map(id => tagLookup[id]),
      })
    }
    next()
  })
  await iteration
}

export default class LinkService {
  async getAllLinks() {
    await buildTags()
    await buildLinks()
    return links
  }
  async getLinksforTag(tag) {
    const items = await this.getAllLinks()
    return items.filter(({ tags }) => tags.includes(tag))
  }
}
