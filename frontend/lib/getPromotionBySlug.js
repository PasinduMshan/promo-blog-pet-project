import { client } from './sanity'

export async function getPromotionBySlug(slug) {
    return await client.fetch(
        `
        *[_type == "promotion" && slug.current == $slug][0]{
          title,
          publishedAt,
          offerDescription,
          termsAndConditions,
          coverImage
        }
        `,
        { slug }
    )
}
