import type { Metadata } from 'next'
import { ClientRedirect } from '../../../../components/ClientRedirect'

export const metadata: Metadata = {
  title: 'Introduction',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/en/blog/envis-intro/',
  },
}

export default function EnDocs01MainRedirect() {
  return <ClientRedirect to="/en/blog/envis-intro/" note="The documentation has moved to the blog: redirecting to the introduction…" />
}
