'use client'

import { LoadingSpinner } from '@/components/ui/loading-spinner'

export function CTALoadingState() {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <LoadingSpinner size="lg" />
      <p className="text-lg font-medium text-center">Processing your request...</p>
      <p className="text-sm text-muted-foreground text-center">
        We&apos;re adding you to our waitlist. Please wait a moment.
      </p>
    </div>
  )
}