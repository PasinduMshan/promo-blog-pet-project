export default async function PromotionDetail({ params }) {
    const { slug } = await params

    return (
        <main className="p-10">
            <h1 className="text-3xl font-bold">
                Promotion Slug: {slug}
            </h1>
        </main>
    )
}
