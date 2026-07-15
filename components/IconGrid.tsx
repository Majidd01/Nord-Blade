"use client";

import { motion, useReducedMotion } from "framer-motion";

type Item = {
  title: string;
  description: string;
};

type IconGridProps = {
  items: readonly Item[];
  columns?: string;
};

function IconCircle({ index }: { index: number }) {
  const paths = [
    "M12 2l2.4 6.8H21l-5.4 4 2.1 6.7L12 16.2 6.3 19.5 8.4 12.8 3 8.8h6.6L12 2z",
    "M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h10v2H4v-2z",
    "M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm-7 8a7 7 0 0 1 14 0H5z",
    "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-2h2zm0-4h-2V7h2z",
    "M17 8h-1V6a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zm-6-2a2 2 0 0 1 4 0v2h-4V6z",
    "M4 19h16v2H4v-2zm2-8h2v6H6v-6zm5-4h2v10h-2V7zm5 2h2v8h-2V9z",
  ];
  return (
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold/45 text-gold">
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d={paths[index % paths.length]} />
      </svg>
    </div>
  );
}

export function IconGrid({
  items,
  columns = "sm:grid-cols-2 lg:grid-cols-3",
}: IconGridProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`grid gap-6 ${columns}`}>
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          className="rounded-lg border border-white/5 bg-surface/40 p-5"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          <IconCircle index={index} />
          <h3 className="font-display text-sm tracking-[0.16em] text-gold uppercase">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
