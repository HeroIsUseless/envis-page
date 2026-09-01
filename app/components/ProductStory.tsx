import Image from 'next/image'
import {
  ArrowRight,
  Boxes,
  Braces,
  Check,
  CloudDownload,
  Code2,
  Cpu,
  Database,
  Download,
  FolderSync,
  Gauge,
  Github,
  Globe2,
  HardDrive,
  Layers3,
  LockKeyhole,
  Network,
  PackageCheck,
  Play,
  Server,
  Settings2,
  TerminalSquare,
  Users,
} from 'lucide-react'
import type { Translations } from '../locales/zh'

interface ProductStoryProps {
  t: Translations
}

const workflowIcons = [FolderSync, Boxes, Play, CloudDownload]
const capabilityIcons = [Layers3, PackageCheck, Gauge, TerminalSquare, Braces, Globe2, FolderSync, LockKeyhole]
const audienceIcons = [Code2, TerminalSquare, Users]

export function ProductStory({ t }: ProductStoryProps) {
  return (
    <>
      <section id="workflow" className="scroll-mt-24 py-16 sm:py-24" aria-labelledby="workflow-title">
        <SectionHeading
          eyebrow={t.workflow.eyebrow}
          title={t.workflow.title}
          description={t.workflow.description}
          id="workflow-title"
        />
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4 dark:border-white/10 dark:bg-white/10">
          {t.workflow.items.map((item, index) => {
            const Icon = workflowIcons[index]
            return (
              <article key={item.title} className="group relative bg-white p-7 dark:bg-[#080808]">
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-mono text-xs text-gray-400">0{index + 1}</span>
                  <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-950 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">{item.desc}</p>
                {index < t.workflow.items.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 rounded-full border border-gray-200 bg-white p-1 text-gray-400 lg:block dark:border-white/10 dark:bg-[#080808]" />
                )}
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
        />
        <div className="mt-16 space-y-20 sm:space-y-28">
          {t.showcase.items.map((item, index) => (
            <article key={item.number} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className={`lg:col-span-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="mb-6 flex items-center gap-3">
                  <span className="font-mono text-sm font-semibold text-blue-600 dark:text-blue-400">{item.number}</span>
                  <span className="h-px w-12 bg-blue-600/30" />
                </div>
                <h3 className="text-2xl font-semibold leading-tight text-gray-950 sm:text-3xl dark:text-white">{item.title}</h3>
                <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-400">{item.desc}</p>
                <div className="mt-7 flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-200">
                  <Check className="h-4 w-4 text-emerald-500" />
                  {t.features.secure.title}
                </div>
              </div>
              <div className={`lg:col-span-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="overflow-hidden rounded-lg border border-gray-200 bg-[#f4f6f8] p-2 shadow-[0_24px_70px_-30px_rgba(15,23,42,0.35)] sm:p-3 dark:border-white/10 dark:bg-white/5">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={1600}
                    height={1200}
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="h-auto w-full rounded-md border border-black/5"
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
        />
        <div className="mt-12 grid grid-cols-1 border-l border-t border-gray-200 sm:grid-cols-2 lg:grid-cols-4 dark:border-white/10">
          {t.capabilities.items.map((item, index) => {
            const Icon = capabilityIcons[index]
            return (
              <article key={item.title} className="min-h-52 border-b border-r border-gray-200 p-6 sm:p-7 dark:border-white/10">
                <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" strokeWidth={1.7} />
                <h3 className="mt-10 text-base font-semibold text-gray-950 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">{item.desc}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="py-16 sm:py-24" aria-labelledby="services-title">
        <div className="overflow-hidden rounded-lg bg-[#111827] px-6 py-12 text-white sm:px-10 lg:px-14">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase text-blue-300">10+ Services</p>
              <h2 id="services-title" className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                {t.features.oneClickInstall.title}
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-gray-300">{t.features.oneClickInstall.desc}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                ['Node.js', Code2],
                ['Python', TerminalSquare],
                ['Java', Braces],
                ['MongoDB', Database],
                ['PostgreSQL', HardDrive],
                ['Nginx', Server],
                ['Redis', Network],
                ['Hosts', Globe2],
                ['Custom', Settings2],
              ].map(([name, ServiceIcon]) => (
                <div key={name as string} className="flex min-h-20 items-center gap-3 border border-white/10 bg-white/5 px-4 py-3">
                  <ServiceIcon className="h-5 w-5 shrink-0 text-blue-300" />
                  <span className="text-sm font-medium">{name as string}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="audience" className="scroll-mt-24 py-16 sm:py-24" aria-labelledby="audience-title">
        <SectionHeading eyebrow={t.audience.eyebrow} title={t.audience.title} id="audience-title" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.audience.items.map((item, index) => {
            const Icon = audienceIcons[index]
            return (
              <article key={item.title} className="border-t-2 border-gray-950 px-1 pt-6 dark:border-white">
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
          <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} id="faq-title" />
          <div className="border-t border-gray-200 dark:border-white/10">
            {t.faq.items.map((item, index) => (
              <details key={item.question} className="group border-b border-gray-200 py-1 dark:border-white/10" open={index === 0}>
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
        <div className="relative overflow-hidden rounded-lg bg-blue-600 px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <Cpu className="absolute -right-10 -top-14 h-64 w-64 text-white/[0.07]" strokeWidth={0.8} />
          <p className="relative font-mono text-xs font-semibold uppercase">{t.finalCta.eyebrow}</p>
          <h2 id="download-title" className="relative mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
            {t.finalCta.title}
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-base leading-7 text-blue-100">{t.finalCta.description}</p>
          <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="/Envis_0.1.0_aarch64.dmg" download className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50 sm:w-auto">
              <Download className="h-4 w-4" />
              {t.finalCta.download}
            </a>
            <a href="https://github.com/xopenbeta/envis-app/releases" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto">
              <Github className="h-4 w-4" />
              {t.finalCta.release}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

function SectionHeading({ eyebrow, title, description, id }: { eyebrow: string; title: string; description?: string; id: string }) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-xs font-semibold uppercase text-blue-600 dark:text-blue-400">{eyebrow}</p>
      <h2 id={id} className="mt-4 text-3xl font-semibold leading-tight text-gray-950 sm:text-4xl lg:text-5xl dark:text-white">{title}</h2>
      {description && <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400">{description}</p>}
    </div>
  )
}