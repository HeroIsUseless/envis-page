import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const dynamic = 'force-static'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default async function AppleIcon() {
  const iconData = await fetch(new URL('./icon.png', import.meta.url)).then(res => res.arrayBuffer())
  return new Response(iconData, {
    headers: {
      'Content-Type': 'image/png',
    },
  })
}
