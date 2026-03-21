"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 200, suffix: "+", label: "Mutlu Müşteri" },
  { value: 340, suffix: "%", label: "Ort. Trafik Artışı" },
  { value: 98, suffix: "%", label: "Müşteri Memnuniyeti" },
  { value: 7, suffix: " Yıl", label: "Deneyim" },
];

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
}

function StatCard({ value, suffix, label }: (typeof stats)[0]) {
  const { count, ref } = useCountUp(value);

  return (
    <div ref={ref} className="text-center px-4">
      <div className="text-4xl font-bold text-dark mb-1 sm:text-3xl">
        {count}
        <span className="text-primary">{suffix}</span>
      </div>
      <div className="text-sm text-gray font-medium">{label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="bg-light py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
