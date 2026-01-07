// Import React to provide access to the React namespace for type definitions like React.MouseEvent
import React from 'react';

export const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement> | MouseEvent, id: string, callback?: () => void) => {
  if (e) e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    if (callback) callback();
  }
};