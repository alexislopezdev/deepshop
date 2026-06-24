import SectionTitle from "../ui/SectionTitle";
import { projects } from "@/lib/data";

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
          {projects.map((project) => (
            <article
              key={project.name}
              className="group overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:shadow-xl"
            >
              <div
                className={`flex h-48 items-end bg-gradient-to-br ${project.color} p-6`}
              >
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
