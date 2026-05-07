"use client";

const techs = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
];

export function TechMarquee() {
  const items = [...techs, ...techs, ...techs];

  return (
    <section className="overflow-hidden border-y border-white/10 bg-[#050f1c]/80 py-12 md:py-14">
      <p className="mb-6 text-center text-sm font-medium text-slate-500">
        Technologies we work with
      </p>
      <div className="relative">
        <div
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#071426] to-transparent md:w-28"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#071426] to-transparent md:w-28"
          aria-hidden
        />
        <div className="flex animate-marquee items-center gap-10 md:gap-14">
          {items.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="flex shrink-0 items-center gap-3 whitespace-nowrap rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.icon}
                alt=""
                className="h-9 w-9 object-contain md:h-11 md:w-11"
              />
              <span className="text-base font-semibold text-slate-200 md:text-lg">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
