import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Envis Docs Entry',
  description: 'Legacy docs entry that redirects to localized docs.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/zh/docs/',
  },
}

export default function DocsEntryPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-center">
      <script
        dangerouslySetInnerHTML={{
          __html:
            "const p=new URLSearchParams(window.location.search);window.location.replace(p.get('lang')==='en'?'/en/docs/':'/zh/docs/');",
        }}
      />
      <div>
        <h1 className="text-2xl font-semibold mb-4">Envis Docs</h1>
        <p className="text-sm text-gray-600 mb-5">Redirecting to localized docs...</p>
        <a className="text-blue-600 hover:text-blue-700" href="/zh/docs/">
          Go to Chinese docs
        </a>
      </div>
    </main>
  )
}
