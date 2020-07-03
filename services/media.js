import { GraphQLClient } from "graphql-request";

export default class MediaService {
	constructor() {
		this.client = new GraphQLClient("https://graphql.datocms.com/", {
			headers: {
				Authorization: `Bearer ${process.env.DATOCMS_TOKEN}`,
			},
		});
	}
	async getById(id) {
		return this.client.request(
			`
    query ($id: ItemId) {
      facepost(filter: {id: {eq: $id}}) {
        media {
          width
          height
          video {
            mp4Url(res: medium)
            thumbnailUrl
          }
        }
        _seoMetaTags {
          attributes
        }
      }
    }
    `,
			{ id }
		);
	}
	async getLatest() {
		return this.client.request(`
      { 
        allFaceposts(first: 1){
          id
          media {
            video {
              thumbnailUrl
            }
          }
        }
      }
    `);
	}
}
