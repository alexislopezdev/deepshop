import Button from "../ui/Button";
import { stats } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-white pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-primary-light opacity-60 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-100 opacity-40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-light px-4 py-1.5 text-sm font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Expertos en desarrollo ecommerce
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Más que una tienda online.{" "}
            <span className="text-primary">La plataforma para vender más</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Desarrollamos ecommerce a medida con tecnología de punta. Shopify,
            WooCommerce o soluciones custom — tu negocio, listo para escalar.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#contacto">Solicitar presupuesto</Button>
            <Button href="#proyectos" variant="secondary">
              Ver proyectos
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-white p-6 text-center shadow-sm"
            >
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-xl">
            <div className="flex items-center gap-2 border-b border-border bg-white px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-muted">tu-tienda.deepshop.com</span>
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-3">
                  <div className="h-32 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5" />
                  <div className="h-3 w-3/4 rounded bg-border" />
                  <div className="h-3 w-1/2 rounded bg-border" />
                  <div className="h-8 w-24 rounded-full bg-primary/10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
