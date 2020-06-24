const _base = require('airtable').base('appaKRf92yu31M3Nf');
const tagsById = {}
const tagsByName = {}
const links = []

async function buildTags() {
  if (Object.keys(tagsById).length > 0) return;
  const tags = _base('Tags')
  const selection = tags.select({})
  const iteration = selection.eachPage((records, next) => {
    for (let value of records) {
      tagsById[value.id] = value
      tagsByName[value.get('name')] = value
    }
    next()
  })
  await iteration
  tagsById._built = true
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
        tags: (value.get('tags')||[]).map(id => tagsById[id].get('name')),
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
  async getLinksforTag(tagName) {
    const items = await this.getAllLinks()
    const tag = tagsByName[tagName]
    return {
      title: tag.get('name'),
      subtitle: tag.get('subtitle'),
      items: items.filter(({ tags }) => tags.includes(tagName))
    }
  }
}
