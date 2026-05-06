import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Envis',
  description: 'Envis language routing entry page',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/zh/',
  },
}

export default function RootEntryPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-center">
      <script
        dangerouslySetInnerHTML={{
          __html:
            "const p=new URLSearchParams(window.location.search);window.location.replace(p.get('lang')==='en'?'/en/':'/zh/');",
        }}
      />
      <div>
        <h1 className="text-2xl font-semibold mb-4">Envis</h1>
        <p className="text-sm text-gray-600 mb-5">Redirecting to localized homepage...</p>
        <a className="text-blue-600 hover:text-blue-700" href="/zh/">
          Go to Chinese homepage
        </a>
      </div>
    </main>
  )
}
