import SectionTitle from "../ui/SectionTitle";
import { values, technologies } from "@/lib/data";
import ScrollReveal from "../ui/ScrollReveal";

export default function About() {
  return (
    <section id="nosotros" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionTitle
              align="left"
              eyebrow="Nosotros"
              title="Nos une la pasión por vender online"
              description="Somos un equipo de desarrolladores y diseñadores especializados en ecommerce. Creemos que cada marca merece una tienda que convierta visitantes en clientes."
            />

            <div className="mt-10 space-y-6">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 90}>
                  <div className="flex gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      ✓
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{value.title}</h3>
                      <p className="mt-1 text-muted leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-foreground">
                Tecnologías que dominamos
              </h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-primary p-6 text-white">
                <p className="text-4xl font-bold">50+</p>
                <p className="mt-1 text-sm text-blue-100">Tiendas lanzadas</p>
              </div>
              <div className="rounded-2xl border border-border bg-white p-6">
                <p className="text-4xl font-bold text-primary">5+</p>
                <p className="mt-1 text-sm text-muted">Años en ecommerce</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
