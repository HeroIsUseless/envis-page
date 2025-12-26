import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const dynamic = 'force-static'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default async function Icon() {
  const iconData = await fetch(new URL('./icon.png', import.meta.url)).then(res => res.arrayBuffer())
  return new Response(iconData, {
    headers: {
      'Content-Type': 'image/png',
    },
  })
}
