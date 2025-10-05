import { useInView } from "motion/react";
import { useEffect, useState, useRef } from "react";

interface TypingTextProps {
  text: string;
  delay?: number; // delay before typing starts
  speed?: number; // typing speed (ms per char)
}

export const TypingText = ({
  text,
  delay = 0,
  speed = 20,
}: TypingTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        let i = 0;
        const interval = setInterval(() => {
          setDisplayedText(text.slice(0, i + 1));
          i++;
          if (i === text.length) clearInterval(interval);
        }, speed);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [isInView, text, delay, speed]);

  return (
    <span ref={ref} className="inline-block">
      {displayedText}
    </span>
  );
};
