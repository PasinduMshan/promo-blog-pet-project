import { getPromotionBySlug } from '@/lib/getPromotionBySlug'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity'

export default async function PromotionPage({ params }) {
    const { slug } = await params
    const promotion = await getPromotionBySlug(slug)

    if (!promotion) return <p className="p-10">Promotion not found</p>

    return (
        <main className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-2">{promotion.title}</h1>
            <p className="text-gray-500 mb-6">
                Published on {new Date(promotion.publishedAt).toDateString()}
            </p>

            {promotion.coverImage && (
                <img
                    src={urlFor(promotion.coverImage).width(800).url()}
                    alt={promotion.title}
                    className="rounded-lg mb-6"
                />
            )}

            <h2 className="text-xl font-semibold mb-2">Offer Details</h2>
            <div className="prose mb-8">
                <PortableText value={promotion.offerDescription} />
            </div>

            <h2 className="text-xl font-semibold mb-2">Terms & Conditions</h2>
            <div className="prose">
                <PortableText value={promotion.termsAndConditions} />
            </div>
        </main>
    )
}
