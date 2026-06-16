import { useEffect, useState } from 'react';

export function useTypedText(words, typingSpeed = 70, deletingSpeed = 40, pause = 1600) {
  const [text, setText] = useState('');

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId;

    const tick = () => {
      const word = words[wordIndex];
      if (!deleting) {
        charIndex++;
        setText(word.slice(0, charIndex));
        if (charIndex === word.length) {
          deleting = true;
          timeoutId = setTimeout(tick, pause);
          return;
        }
      } else {
        charIndex--;
        setText(word.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
      timeoutId = setTimeout(tick, deleting ? deletingSpeed : typingSpeed);
    };

    tick();
    return () => clearTimeout(timeoutId);
  }, [words, typingSpeed, deletingSpeed, pause]);

  return text;
}
