import Link from "next/link";

export default function NotFound () {
    return <div className="flex h-[calc(100vh-4.625rem)] w-full flex-col items-center justify-center gap-6 px-4 md:px-6">
    <div className="space-y-2 text-center">
      <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl md:text-8xl">404</h1>
      <p className="text-2xl font-medium text-muted-foreground sm:text-3xl">Page not found</p>
      <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
        The page you are looking for does not exist or has been moved.
      </p>
    </div>
    <Link
      href="/"
      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      prefetch={false}
    >
      Go to Home
    </Link>
  </div>
}