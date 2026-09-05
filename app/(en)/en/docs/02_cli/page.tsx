import type { Metadata } from 'next'
import { ClientRedirect } from '../../../../components/ClientRedirect'

export const metadata: Metadata = {
  title: 'CLI Commands',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/en/blog/cli-commands/',
  },
}

export default function EnDocs02CliRedirect() {
  return <ClientRedirect to="/en/blog/cli-commands/" note="The documentation has moved to the blog: redirecting to the CLI commands…" />
}
