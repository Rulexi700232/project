import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`
      bg-light-bg dark:bg-dark-bg-secondary
      border border-light-border dark:border-dark-border
      rounded-lg shadow-lg dark:shadow-dark-lg
      transition-colors
      ${className}
    `}>
      {children}
    </div>
  );
}