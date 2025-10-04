"use client";

import { useEffect, useRef, useState } from "react";

// 카운트업 애니메이션 컴포넌트
const CountUpAnimation = ({
  endValue,
  duration = 2,
  suffix = "",
  prefix = "",
  numberColor = "#9c5f07",
  unitColor = "black",
}: {
  endValue: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  numberColor?: string;
  unitColor?: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const startTime = Date.now();
          const startValue = 0;

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);

            // easeOut 함수
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentValue = startValue + (endValue - startValue) * easeOut;

            setCount(currentValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [endValue, duration]);

  return (
    <div ref={ref} className="flex items-baseline justify-center">
      <span
        className="text-[24px] sm:text-2xl font-extrabold"
        style={{ color: numberColor }}
      >
        {prefix}
        {Math.round(count).toLocaleString()}
      </span>
      <span
        className="text-[13px] sm:text-base font-bold ml-1"
        style={{ color: unitColor }}
      >
        {suffix}
      </span>
    </div>
  );
};

export default CountUpAnimation;
