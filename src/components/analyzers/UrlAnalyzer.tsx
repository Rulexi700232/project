import React, { useState } from 'react';
import { Search, Globe } from 'lucide-react';
import { useAccessibilityStore } from '../../store/accessibilityStore';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { ErrorMessage } from '../common/ErrorMessage';

export function UrlAnalyzer() {
  const { isLoading, error, auditUrl } = useAccessibilityStore();
  const [url, setUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!url) return;
    await auditUrl(url);
  };

  return (
    <div className="bg-light-bg dark:bg-dark-bg-secondary rounded-xl shadow-light dark:shadow-dark p-6 border border-light-border dark:border-dark-border transition-all duration-200">
      <div className="flex items-center space-x-3 mb-6">
        <Globe className="w-6 h-6 text-light-accent dark:text-dark-accent" />
        <h2 className="text-xl font-semibold text-light-text dark:text-dark-text">
          Analyze Website
        </h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label 
            htmlFor="url" 
            className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-2"
          >
            Website URL
          </label>
          <div className="relative">
            <input
              type="url"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-4 py-2 pr-12 bg-light-bg-secondary dark:bg-dark-bg-tertiary 
                       text-light-text dark:text-dark-text
                       border border-light-border dark:border-dark-border
                       rounded-lg focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent
                       focus:border-light-accent dark:focus:border-dark-accent
                       placeholder-light-text-tertiary dark:placeholder-dark-text-tertiary
                       transition-all duration-200"
              placeholder="https://example.com"
              required
              pattern="https?://.*"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <Search className="h-5 w-5 text-light-text-tertiary dark:text-dark-text-tertiary" />
            </div>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isLoading || !url}
          className="w-full bg-light-accent hover:bg-light-accent-hover dark:bg-dark-accent 
                   dark:hover:bg-dark-accent-hover text-white font-medium py-2 px-4 rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-offset-2 
                   focus:ring-light-accent dark:focus:ring-dark-accent
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all duration-200"
        >
          {isLoading ? 'Analyzing...' : 'Analyze Website'}
        </button>
      </form>

      {isLoading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
    </div>
  );
}