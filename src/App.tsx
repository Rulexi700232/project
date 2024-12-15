import React from 'react';
import { Header } from './components/layout/Header';
import { MainContent } from './components/layout/MainContent';
import { Footer } from './components/layout/Footer';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <div className="min-h-screen flex flex-col bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;