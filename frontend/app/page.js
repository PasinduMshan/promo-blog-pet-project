import Link from 'next/link'

export default function Home() {
  return (
      <main className="p-10">
        <h1 className="text-3xl font-bold mb-4">
          Promo Blog (Sanity + Next.js)
        </h1>

        <Link
            href="/promotions"
            className="text-blue-600 underline"
        >
          View Promotions →
        </Link>
      </main>
  )
}
