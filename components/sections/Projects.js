import SectionTitle from "../ui/SectionTitle";
import { projects } from "@/lib/data";
import ScrollReveal from "../ui/ScrollReveal";

export default function Projects() {
  return (
    <section id="proyectos" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Proyectos"
          title="Marcas que crecen con Deepshop"
          description="Casos reales de ecommerce que transformamos en motores de venta."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal key={project.name} delay={(index % 3) * 100}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar el proyecto ${project.name} (se abre en una nueva pestaña)`}
                className="group block overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <div
                  className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${project.color} p-6`}
                >
                  {project.logo ? (
                    <img
                      src={project.logo}
                      alt={`Logo de ${project.name}`}
                      className="max-h-32 max-w-[80%] rounded-xl bg-white p-4 object-contain shadow-md"
                    />
                  ) : (
                    <span className="rounded-xl bg-white/90 px-6 py-4 text-2xl font-bold text-slate-800 shadow-md">
                      {project.name}
                    </span>
                  )}
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {project.metric}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-foreground">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{project.stack}</p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
