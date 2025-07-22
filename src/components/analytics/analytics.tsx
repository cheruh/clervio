'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // This is where you would normally send analytics data
    // For now, we'll just log to console
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
    console.log(`Page view: ${url}`)
    
    // Example of how you would integrate with services like Google Analytics
    // if (typeof window.gtag === 'function') {
    //   window.gtag('config', 'GA-MEASUREMENT-ID', {
    //     page_path: url,
    //   })
    // }
  }, [pathname, searchParams])

  return null
}