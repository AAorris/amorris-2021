
import { GraphQLClient } from 'graphql-request'

export default class MediaService {
  constructor() {
    this.client = new GraphQLClient("https://graphql.datocms.com/",
    {
      headers: {
        "Authorization": `Bearer ${process.env.DATOCMS_TOKEN}`,
      }
    });
  }
  async getLatest() {
    return this.client.request(`
      { 
        allFaceposts(first: 1){
          media {
            blurhash
            blurUpThumb
            width
            height
            video {
              streamingUrl
            }
          }
        }
      }
    `)
  }
}