import { getPromotionBySlug } from '@/lib/getPromotionBySlug'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity'

export default async function PromotionPage({ params }) {
    const { slug } = await params
    const promotion = await getPromotionBySlug(slug)

    if (!promotion) return <p className="p-10 text-center text-red-500">Promotion not found</p>

    // Custom Portable Text components
    const ptComponents = {
        block: {
            normal: ({ children }) => (
                <p className="mb-4 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">{children}</p>
            ),
            h1: ({ children }) => <h1 className="text-4xl font-bold my-6">{children}</h1>,
            h2: ({ children }) => <h2 className="text-3xl font-semibold my-5">{children}</h2>,
            h3: ({ children }) => <h3 className="text-2xl font-semibold my-4">{children}</h3>,
            blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-yellow-400 bg-yellow-50 dark:bg-yellow-900 p-4 italic my-6 rounded">
                    {children}
                </blockquote>
            )
        },
        list: {
            bullet: ({ children }) => <ul className="list-disc ml-6 mb-6">{children}</ul>,
            number: ({ children }) => <ol className="list-decimal ml-6 mb-6">{children}</ol>
        },
        listItem: {
            bullet: ({ children }) => <li className="mb-2 text-blue-700 dark:text-blue-400">{children}</li>,
            number: ({ children }) => <li className="mb-2 text-green-700 dark:text-green-400">{children}</li>
        }
    }

    return (
        <main className="max-w-3xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4">{promotion.title}</h1>
            <p className="text-gray-500 mb-6">
                Published on {new Date(promotion.publishedAt).toDateString()}
            </p>

            {promotion.coverImage && (
                <img
                    src={urlFor(promotion.coverImage).width(900).url()}
                    alt={promotion.title}
                    className="rounded-lg mb-8 w-full h-auto object-cover shadow-lg"
                />
            )}

            <h2 className="text-3xl font-semibold mb-4 text-purple-700">Offer Details</h2>
            <div>
                <PortableText value={promotion.offerDescription} components={ptComponents} />
            </div>

            <h2 className="text-3xl font-semibold mt-8 mb-4 text-red-600">Terms & Conditions</h2>
            <div>
                <PortableText value={promotion.termsAndConditions} components={ptComponents} />
            </div>
        </main>
    )
}
