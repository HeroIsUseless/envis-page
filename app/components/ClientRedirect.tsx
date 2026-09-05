import Link from 'next/link'

export function ClientRedirect({ to, note }: { to: string; note: string }) {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 text-center">
      <script dangerouslySetInnerHTML={{ __html: `window.location.replace(${JSON.stringify(to)});` }} />
      <div>
        <h1 className="mb-4 text-2xl font-semibold">Envis</h1>
        <p className="mb-5 text-sm text-gray-600">{note}</p>
        <Link className="text-blue-600 hover:text-blue-700" href={to}>
          {to}
        </Link>
      </div>
    </main>
  )
}
