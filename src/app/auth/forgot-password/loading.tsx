export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-card border border-border/50 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded mb-4"></div>
          <div className="h-4 bg-muted rounded mb-2"></div>
          <div className="h-4 bg-muted rounded mb-6"></div>
          <div className="h-12 bg-muted rounded"></div>
        </div>
      </div>
    </div>
  )
}