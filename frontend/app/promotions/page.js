import { client, urlFor } from '../../lib/sanity'
import Link from 'next/link'

export default async function Promotions() {
    // 1️⃣ Fetch promotions from Sanity
    const promotions = await client.fetch(`*[_type == "promotion"] | order(publishedAt desc){
    _id,
    title,
    slug,
    coverImage
  }`)

    return (
        <main className="p-10">
            <h1 className="text-3xl font-bold mb-6">All Promotions</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {promotions.map((promo) => (
                    <Link
                        key={promo._id}
                        href={`/promotions/${promo.slug.current}`}
                        className="block border rounded-lg overflow-hidden hover:shadow-lg transition"
                    >
                        {promo.coverImage && (
                            <img
                                src={urlFor(promo.coverImage).width(400).height(200).url()}
                                alt={promo.title}
                                className="w-full h-48 object-cover"
                            />
                        )}
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{promo.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}
