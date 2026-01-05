import { client, urlFor } from '../../../lib/sanity'

export default async function PromotionDetail({ params }) {
    const { slug } = await params

    // 1️⃣ Fetch single promotion by slug
    const promotion = await client.fetch(
        `*[_type == "promotion" && slug.current == $slug][0]{
      title,
      coverImage,
      offerDescription,
      termsAndConditions,
      publishedAt
    }`,
        { slug }
    )

    // 2️⃣ Safety check
    if (!promotion) {
        return (
            <main className="p-10">
                <h1 className="text-2xl font-bold">Promotion not found</h1>
            </main>
        )
    }

    return (
        <main className="p-10 max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl font-bold mb-4">
                {promotion.title}
            </h1>

            {/* Published date */}
            {promotion.publishedAt && (
                <p className="text-sm text-gray-500 mb-6">
                    Published on {new Date(promotion.publishedAt).toDateString()}
                </p>
            )}

            {/* Cover image */}
            {promotion.coverImage && (
                <img
                    src={urlFor(promotion.coverImage).width(800).url()}
                    alt={promotion.title}
                    className="w-full rounded-lg mb-8"
                />
            )}

            {/* Placeholder for rich text */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-3">
                    Offer Details
                </h2>
                <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          {JSON.stringify(promotion.offerDescription, null, 2)}
        </pre>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3">
                    Terms & Conditions
                </h2>
                <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          {JSON.stringify(promotion.termsAndConditions, null, 2)}
        </pre>
            </section>
        </main>
    )
}
