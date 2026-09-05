import type { Metadata } from 'next'
import { ClientRedirect } from '../../../components/ClientRedirect'

export const metadata: Metadata = {
  title: 'Envis Documentation',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/en/blog/',
  },
}

export default function EnDocsRedirect() {
  return <ClientRedirect to="/en/blog/" note="The documentation has moved to the blog: redirecting…" />
}
