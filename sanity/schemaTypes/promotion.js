// schemas/promotion.js

export default {
    name: 'promotion',
    title: 'Promotion',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Promotion Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'offerDescription',
            title: 'Offer Description',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'termsAndConditions',
            title: 'Terms & Conditions',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime'
        }
    ]
}
