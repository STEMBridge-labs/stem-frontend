const STATS = [
  { bigText: "6+ Topics", smallText: "ON JSS 1 MATHS" },
  { bigText: "100%", smallText: "OFFLINE READY" },
  { bigText: "FREE", smallText: "FOR STUDENTS" },
]

export function StatsBanner() {
  return (
    <section className="bg-primary px-4 py-8 md:py-12">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
        {STATS.map((stat) => (
          <div
            key={stat.smallText}
            className="rounded-2xl bg-primary-foreground/15 py-6 text-center text-primary-foreground"
          >
            <div className="text-3xl font-extrabold">{stat.bigText}</div>
            <div className="mt-1 text-xs font-semibold tracking-wide text-primary-foreground/80">
              {stat.smallText}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
