import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { Toaster } from '@/components/ui/sonner';

export function RootLayout({ children }) {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="min-h-screen bg-background font-sans antialiased">
          <Suspense fallback={<LoadingSpinner />}>
            <main className="flex-1">
              {children}
            </main>
            <Toaster />
          </Suspense>
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}