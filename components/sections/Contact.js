"use client";

import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import { projectTypes } from "@/lib/data";

const initialForm = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate() {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "El nombre es requerido";
    if (!form.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Ingresá un email válido";
    }
    if (!form.message.trim()) newErrors.message = "El mensaje es requerido";

    return newErrors;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    setLoading(false);
    setSubmitted(true);
    setForm(initialForm);
  }

  function handleReset() {
    setSubmitted(false);
    setErrors({});
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-white px-4 py-3 text-foreground placeholder:text-slate-400 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <section id="contacto" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Contacto"
          title="Hablemos de tu próximo ecommerce"
          description="Contanos tu proyecto y te respondemos en menos de 24 horas con una propuesta a medida."
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-12 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h3 className="font-bold text-foreground">Email</h3>
              <p className="mt-1 text-muted">info@deepshop.com</p>
            </div>
            <div>
              <h3 className="font-bold text-foreground">Teléfono</h3>
              <p className="mt-1 text-muted">+54 11 0000-0000</p>
            </div>
            <div>
              <h3 className="font-bold text-foreground">Ubicación</h3>
              <p className="mt-1 text-muted">Buenos Aires, Argentina</p>
            </div>
            <div className="rounded-2xl bg-primary-light p-6">
              <p className="text-sm font-semibold text-primary">
                Consulta sin compromiso
              </p>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Primera reunión gratuita para entender tu negocio y definir la
                mejor solución ecommerce.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-surface px-8 py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-foreground">
                  ¡Mensaje enviado!
                </h3>
                <p className="mt-3 max-w-sm text-muted">
                  Recibimos tu consulta. Nos pondremos en contacto en menos de
                  24 horas.
                </p>
                <Button
                  variant="secondary"
                  className="mt-8"
                  onClick={handleReset}
                >
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border border-border bg-surface p-8"
                noValidate
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Nombre *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      className={`${inputClass} ${errors.name ? "border-red-400" : ""}`}
                      placeholder="Tu nombre"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`${inputClass} ${errors.email ? "border-red-400" : ""}`}
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Empresa
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="projectType"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Tipo de proyecto
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Seleccionar...</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none ${errors.message ? "border-red-400" : ""}`}
                    placeholder="Contanos sobre tu proyecto..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full sm:w-auto"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    "Enviar mensaje"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
