import { valueBar } from "@/lib/site";

export function ValueBar() {
  return (
    <section className="border-y border-gold/15 bg-surface/70">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:grid-cols-2 lg:grid-cols-5 lg:px-6">
        {valueBar.map((item) => (
          <div key={item.title} className="text-center lg:text-left">
            <p className="font-display text-sm text-gold">
              {item.title}
            </p>
            <p className="mt-2 text-sm text-muted">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
