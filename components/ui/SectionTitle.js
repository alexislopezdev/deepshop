export default function SectionTitle({ eyebrow, title, description, align = "center" }) {
  const alignClass = align === "left" ? "text-left" : "mx-auto max-w-2xl text-center";

  return (
    <div className={alignClass}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
