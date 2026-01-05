import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

export const client = createClient({
    projectId: 'jvk1vpam',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2026-01-01'
})

const builder = createImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
