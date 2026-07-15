"use client";

import { motion, useReducedMotion } from "framer-motion";
import { launchProcess } from "@/lib/site";

const icons = [
  // lightbulb
  "M12 2a7 7 0 0 0-4 12.7V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.3A7 7 0 0 0 12 2Zm-2 18a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H10v1Z",
  // design
  "M3 21l3.5-1L20 6.5 17.5 4 4 17.5 3 21Zm14.8-15.2 1.4 1.4-1.1 1.1-1.4-1.4 1.1-1.1Z",
  // gear
  "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm9 3h-1.1a7 7 0 0 0-1.1-2.6l.8-.8-1.4-1.4-.8.8A7 7 0 0 0 15 5.1V4h-2v1.1a7 7 0 0 0-2.6 1.1l-.8-.8-1.4 1.4.8.8A7 7 0 0 0 5.1 10H4v2h1.1a7 7 0 0 0 1.1 2.6l-.8.8 1.4 1.4.8-.8a7 7 0 0 0 2.6 1.1V20h2v-1.1a7 7 0 0 0 2.6-1.1l.8.8 1.4-1.4-.8-.8a7 7 0 0 0 1.1-2.6H20v-2Z",
  // box
  "M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9Zm9 2L6 6.8l6-3 6 3-6 2.7Zm-7 2.3 6 3v7.2l-6-3v-7.2Zm16 0v7.2l-6 3v-7.2l6-3Z",
  // camera
  "M4 7h3l2-2h6l2 2h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Zm8 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
  // rocket
  "M12 2c3 2 5 6 5 11-2 0-4 .4-5 1-1-.6-3-1-5-1 0-5 2-9 5-11Zm0 13c1.2 0 3 .6 4 1.2V20l-2-1-2 1v-3.8c1-.6 1.8-1.2 2-1.2Z",
];

export function ProcessSteps() {
  const reduceMotion = useReducedMotion();

  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {launchProcess.map((step, index) => (
        <motion.li
          key={step.number}
          className="relative rounded-lg border border-gold/20 bg-surface/60 p-5"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 text-gold">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d={icons[index] ?? icons[0]} />
            </svg>
          </div>
          <p className="font-display text-xs tracking-[0.2em] text-gold uppercase">
            {step.number} {step.title}
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-muted">
            {step.points.map((point) => (
              <li key={point}>• {point}</li>
            ))}
          </ul>
        </motion.li>
      ))}
    </ol>
  );
}
