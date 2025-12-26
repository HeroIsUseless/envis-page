'use client'

import { Suspense } from 'react'
import { I18nProvider } from '../contexts/I18nContext'

function I18nProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      {children}
    </I18nProvider>
  )
}

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white dark:bg-[#030303]" />}>
      <I18nProviderWrapper>
        {children}
      </I18nProviderWrapper>
    </Suspense>
  )
}
