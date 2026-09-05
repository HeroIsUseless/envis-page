import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Envis Docs Entry',
  description: 'Legacy docs entry that redirects to the blog.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/zh/blog/',
  },
}

export default function DocsEntryPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-center">
      <script
        dangerouslySetInnerHTML={{
          __html:
            "const p=new URLSearchParams(window.location.search);window.location.replace(p.get('lang')==='en'?'/en/blog/':'/zh/blog/');",
        }}
      />
      <div>
        <h1 className="text-2xl font-semibold mb-4">Envis Blog</h1>
        <p className="text-sm text-gray-600 mb-5">The docs have merged into the blog. Redirecting...</p>
        <a className="text-blue-600 hover:text-blue-700" href="/zh/blog/">
          Go to the blog
        </a>
      </div>
    </main>
  )
}
