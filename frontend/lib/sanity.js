import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'jvk1vpam', // replace with your Sanity project ID
    dataset: 'production',
    useCdn: true, // `false` if you want fresh data
    apiVersion: '2026-01-01'
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
