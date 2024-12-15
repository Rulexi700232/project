import React from 'react';
import { Loader2 } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div 
      className="flex flex-col items-center justify-center py-8"
      role="status"
      aria-label="Loading analysis results"
    >
      <Loader2 className="w-10 h-10 text-light-accent dark:text-dark-accent animate-spin" />
      <p className="mt-4 text-light-text-secondary dark:text-dark-text-secondary">
        Analyzing content...
      </p>
    </div>
  );
}