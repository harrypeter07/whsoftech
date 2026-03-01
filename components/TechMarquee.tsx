"use client";

const techs = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
];

export function TechMarquee() {
  const items = [...techs, ...techs, ...techs];

  return (
    <section className="py-12 md:py-16 bg-[#F5F7FA] overflow-hidden">
      <p className="text-center text-[#718096] text-sm mb-6 font-medium">
        Trusted by 100+ businesses
      </p>
      <div className="relative">
        {/* Left blur gradient */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 md:w-32 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #F5F7FA 0%, #F5F7FA 20%, transparent 100%)",
          }}
        />
        {/* Right blur gradient */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 md:w-32 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, #F5F7FA 0%, #F5F7FA 20%, transparent 100%)",
          }}
        />
        <div className="flex animate-marquee gap-10 md:gap-14 items-center">
          {items.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="shrink-0 flex items-center gap-3 whitespace-nowrap"
            >
              <img
                src={t.icon}
                alt={t.name}
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
              <span className="text-[#1A202C] font-semibold text-base md:text-lg">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
