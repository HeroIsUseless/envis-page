"use client"

import Image from 'next/image'
import type { PointerEvent } from 'react'
import {
  Boxes,
  Braces,
  CircleHelp,
  CloudDownload,
  Code2,
  Cpu,
  Download,
  FolderSync,
  Gauge,
  Github,
  Globe2,
  Layers3,
  LayoutDashboard,
  LockKeyhole,
  MonitorCheck,
  PackageCheck,
  Play,
  Rocket,
  Sparkles,
  Shuffle,
  TerminalSquare,
  Users,
} from 'lucide-react'
import type { Translations } from '../locales/zh'
import OrbitImages from './OrbitImages'
import GlareHover from './GlareHover'
import GradientText from './GradientText'

interface ProductStoryProps {
  t: Translations
}

const workflowIcons = [FolderSync, Boxes, Play, CloudDownload]
const capabilityIcons = [Layers3, PackageCheck, Gauge, TerminalSquare, Braces, Globe2, FolderSync, LockKeyhole]
const audienceIcons = [Code2, TerminalSquare, Users]
const whyIcons = [Rocket, Shuffle, MonitorCheck, FolderSync]

function handleCardPointerMove(event: PointerEvent<HTMLElement>) {
  if (event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  const card = event.currentTarget
  const rect = card.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  const normalizedX = x / rect.width - 0.5
  const normalizedY = y / rect.height - 0.5

  card.style.setProperty('--spotlight-x', `${x}px`)
  card.style.setProperty('--spotlight-y', `${y}px`)
  card.style.setProperty('--tilt-x', `${normalizedY * -12}deg`)
  card.style.setProperty('--tilt-y', `${normalizedX * 12}deg`)
  card.style.setProperty('--shadow-x', `${normalizedX * -18}px`)
  card.style.setProperty('--shadow-y', `${normalizedY * -18}px`)
}

function handleCardPointerLeave(event: PointerEvent<HTMLElement>) {
  const card = event.currentTarget
  card.style.removeProperty('--spotlight-x')
  card.style.removeProperty('--spotlight-y')
  card.style.removeProperty('--tilt-x')
  card.style.removeProperty('--tilt-y')
  card.style.removeProperty('--shadow-x')
  card.style.removeProperty('--shadow-y')
}

export function ProductStory({ t }: ProductStoryProps) {
  return (
    <>
      <section id="why" className="scroll-mt-24 py-16 sm:py-24" aria-labelledby="why-title">
        <div className="mx-auto max-w-3xl text-center">
          <GradientText
            as="h2"
            id="why-title"
            className="text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
            colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
            animationSpeed={3}
          >
            {t.why.title}
          </GradientText>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg dark:text-gray-400">{t.why.description}</p>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.items.map((item, index) => {
            const Icon = whyIcons[index]
            const visualStyles = [
              'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300',
              'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300',
              'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-300',
              'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-300',
            ]
            return (
              <article key={item.title}>
                <GlareHover
                  width="100%"
                  height="100%"
                  background="var(--glare-card-bg)"
                  borderRadius="8px"
                  borderColor="transparent"
                  glareColor="#93c5fd"
                  glareOpacity={0.22}
                  glareAngle={-45}
                  glareSize={250}
                  transitionDuration={800}
                  className="p-2"
                  style={{ display: 'block', placeItems: 'normal' }}
                >
                  <div className={`relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-md ${visualStyles[index]}`}>
                    <div className="absolute inset-5 rounded-full border border-current opacity-10" />
                    <div className="absolute inset-10 rounded-full border border-current opacity-15" />
                    <Icon className="relative h-12 w-12" strokeWidth={1.35} />
                  </div>
                  <div className="relative px-3 pb-4 pt-5">
                    <h3 className="text-lg font-semibold text-gray-950 dark:text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                </GlareHover>
              </article>
            )
          })}
        </div>
      </section>

      <section id="workflow" className="scroll-mt-24 py-16 sm:py-24" aria-labelledby="workflow-title">
        <SectionHeading
          eyebrow={t.workflow.eyebrow}
          title={t.workflow.title}
          description={t.workflow.description}
          id="workflow-title"
          icon={Shuffle}
          color="text-blue-600 dark:text-blue-400"
        />
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.workflow.items.map((item, index) => {
            const Icon = workflowIcons[index]
            return (
              <article key={item.title} onPointerMove={handleCardPointerMove} onPointerLeave={handleCardPointerLeave} className="feature-card group relative rounded-lg border border-transparent bg-gray-50 p-7 hover:bg-blue-50 dark:bg-[#0c0c0c] dark:hover:bg-blue-500/10">
                <div className="mb-10 flex items-center">
                  <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-950 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">{item.desc}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section id="showcase" className="scroll-mt-24 py-16 sm:py-24" aria-labelledby="showcase-title">
        <SectionHeading
          eyebrow={t.showcase.eyebrow}
          title={t.showcase.title}
          description={t.showcase.description}
          id="showcase-title"
          icon={LayoutDashboard}
          color="text-emerald-600 dark:text-emerald-400"
        />
        <div className="mt-16 space-y-20 sm:space-y-28">
          {t.showcase.items.map((item, index) => (
            <article key={item.title} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className={`lg:col-span-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h3 className="text-2xl font-semibold leading-tight text-gray-950 sm:text-3xl dark:text-white">{item.title}</h3>
                <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
              <div className={`lg:col-span-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="product-frame overflow-hidden rounded-lg shadow-[0_24px_70px_-30px_rgba(15,23,42,0.35)]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={1600}
                    height={1200}
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-24 py-16 sm:py-24" aria-labelledby="capabilities-title">
        <SectionHeading
          eyebrow={t.capabilities.eyebrow}
          title={t.capabilities.title}
          description={t.capabilities.description}
          id="capabilities-title"
          icon={Layers3}
          color="text-amber-600 dark:text-amber-400"
        />
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.capabilities.items.map((item, index) => {
            const Icon = capabilityIcons[index]
            return (
              <article key={item.title} onPointerMove={handleCardPointerMove} onPointerLeave={handleCardPointerLeave} className="feature-card min-h-52 rounded-lg border border-transparent bg-gray-50 p-6 hover:bg-gray-100 sm:p-7 dark:bg-[#0c0c0c] dark:hover:bg-[#141414]">
                <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" strokeWidth={1.7} />
                <h3 className="mt-10 text-base font-semibold text-gray-950 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">{item.desc}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section id="audience" className="scroll-mt-24 py-16 sm:py-24" aria-labelledby="audience-title">
        <SectionHeading eyebrow={t.audience.eyebrow} title={t.audience.title} id="audience-title" icon={Users} color="text-rose-600 dark:text-rose-400" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.audience.items.map((item, index) => {
            const Icon = audienceIcons[index]
            return (
              <article key={item.title} onPointerMove={handleCardPointerMove} onPointerLeave={handleCardPointerLeave} className="feature-card rounded-lg border border-gray-200 bg-white p-7 dark:border-white/10 dark:bg-[#0c0c0c]">
                <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h3 className="mt-8 text-xl font-semibold text-gray-950 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">{item.desc}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 py-16 sm:py-24" aria-labelledby="faq-title">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} id="faq-title" icon={CircleHelp} color="text-violet-600 dark:text-violet-400" />
          <div className="border-t border-gray-200 dark:border-white/10">
            {t.faq.items.map((item, index) => (
              <details key={item.question} className="group border-b border-gray-200 px-3 py-1 transition-colors hover:bg-blue-50/70 dark:border-white/10 dark:hover:bg-blue-500/5" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-medium text-gray-950 marker:content-none dark:text-white">
                  {item.question}
                  <span className="text-xl font-light text-gray-400 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-2xl pb-6 pr-10 text-sm leading-7 text-gray-600 dark:text-gray-400">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24" aria-labelledby="download-title">
        <GlareHover
          width="100%"
          height="100%"
          background="var(--glare-card-bg)"
          borderRadius="8px"
          borderColor="transparent"
          glareColor="#93c5fd"
          glareOpacity={0.22}
          glareAngle={-45}
          glareSize={250}
          transitionDuration={800}
          className="px-6 py-14 text-gray-950 sm:px-12 sm:py-20 dark:text-white"
          style={{ display: 'block', placeItems: 'normal' }}
        >
          <Cpu className="ambient-glow absolute -right-10 -top-14 h-64 w-64 text-blue-600/[0.07] dark:text-white/5" strokeWidth={0.8} />
          <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase text-blue-600 dark:text-blue-400">{t.finalCta.eyebrow}</p>
              <h2 id="download-title" className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
                {t.finalCta.title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-400">{t.finalCta.description}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="/Envis_0.1.0_aarch64.dmg" download className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:w-auto">
                  <Download className="h-4 w-4" />
                  {t.finalCta.download}
                </a>
                <a href="https://github.com/xopenbeta/envis-app/releases" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-50 sm:w-auto dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
                  <Github className="h-4 w-4" />
                  {t.finalCta.release}
                </a>
              </div>
            </div>
            <div className="relative h-[min(19rem,34vw)] w-full overflow-hidden">
              <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2">
                <OrbitImages
                  images={[
                    '/services/nodejs.svg',
                    '/services/python.svg',
                    '/services/java.svg',
                    '/services/mongodb.svg',
                    '/services/postgresql.svg',
                    '/services/nginx.svg',
                    '/services/redis.svg',
                  ]}
                  altPrefix="Service"
                  shape="ellipse"
                  radiusX={440}
                  radiusY={150}
                  rotation={-8}
                  duration={30}
                  itemSize={120}
                  responsive
                  showPath
                  pathColor="rgba(96, 165, 250, 0.28)"
                  pathWidth={1.5}
                  centerContent={
                    <Image
                      src="/app-icon.png"
                      alt="Envis"
                      width={96}
                      height={96}
                      className="h-12 w-12"
                    />
                  }
                />
              </div>
              <ul className="sr-only">
                {['Node.js', 'Python', 'Java', 'MongoDB', 'PostgreSQL', 'Nginx', 'Redis', 'Hosts', 'Custom'].map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
        </GlareHover>
      </section>
    </>
  )
}

function SectionHeading({ eyebrow, title, description, id, icon: Icon, color }: { eyebrow: string; title: string; description?: string; id: string; icon: typeof Sparkles; color: string }) {
  return (
    <div className="max-w-3xl">
      <div className={`flex items-center gap-2 text-base font-bold sm:text-lg ${color}`}>
        <Icon className="h-5 w-5" strokeWidth={2} />
        <span>{eyebrow}</span>
      </div>
      <h2 id={id} className="mt-4 text-3xl font-semibold leading-tight text-gray-950 sm:text-4xl lg:text-5xl dark:text-white">{title}</h2>
      {description && <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400">{description}</p>}
    </div>
  )
}