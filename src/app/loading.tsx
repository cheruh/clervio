import { LoadingSpinner } from '@/components/ui/loading-spinner'

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="lg" />
        <h2 className="mt-4 text-xl font-medium">Loading Clervio...</h2>
        <p className="text-sm text-muted-foreground mt-2">
          Just a moment while we prepare your experience
        </p>
      </div>
    </div>
  )
}