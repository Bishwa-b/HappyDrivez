import { cn } from '../utils/cn';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-gray-200/80 dark:bg-gray-700/50',
        className
      )}
    />
  );
}

export function CarCardSkeleton() {
  return (
    <div className="bg-black rounded-lg overflow-hidden shadow-lg">
      <Skeleton className="w-full h-48" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-6 w-16" />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 mb-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center">
              <Skeleton className="h-5 w-5 mr-2" />
              <Skeleton className="h-4 w-20" />
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-10 w-32 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function CarDetailsSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50 pt-5">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Skeleton className="h-6 w-32 mb-8" />
        <div className="bg-black rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <Skeleton className="w-full h-[700px]" />
            <div className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                <div>
                  <Skeleton className="h-10 w-48 mb-4" />
                  <Skeleton className="h-8 w-32" />
                </div>
                <div className="mt-4 lg:mt-0 flex space-x-4">
                  <Skeleton className="h-12 w-32 rounded-full" />
                  <Skeleton className="h-12 w-32 rounded-full" />
                </div>
              </div>
              {[1, 2, 3].map((section) => (
                <div key={section} className="mb-8">
                  <Skeleton className="h-8 w-48 mb-6" />
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((item) => (
                      <Skeleton key={item} className="h-24 w-full rounded-lg" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="relative h-screen bg-gray-50">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-black rounded-lg shadow-xl overflow-hidden">
          <Skeleton className="w-full h-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full pt-20">
          <Skeleton className="h-16 w-96 mb-6 bg-gray-300/20" />
          <Skeleton className="h-8 w-80 mb-10 bg-gray-300/20" />
          <div className="flex gap-4">
            <Skeleton className="h-12 w-40 rounded-md bg-gray-300/20" />
            <Skeleton className="h-12 w-40 rounded-md bg-gray-300/20" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicesSkeleton() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Skeleton className="h-10 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-80 mx-auto" />
        </div>
        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-center">
              <Skeleton className="h-12 w-12 mx-auto mb-6" />
              <Skeleton className="h-6 w-40 mx-auto mb-4" />
              <Skeleton className="h-20 w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSkeleton() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <Skeleton className="h-10 w-48 mb-4" />
            <Skeleton className="h-6 w-96 mb-8" />
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center">
                  <Skeleton className="h-6 w-6 mr-4" />
                  <Skeleton className="h-6 w-48" />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <Skeleton className="h-5 w-24 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>
            ))}
            <div>
              <Skeleton className="h-5 w-24 mb-2" />
              <Skeleton className="h-32 w-full" />
            </div>
            <Skeleton className="h-12 w-full rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
