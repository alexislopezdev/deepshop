export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
  disabled = false,
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-hover shadow-sm hover:shadow-md",
    secondary:
      "border-2 border-primary text-primary hover:bg-primary-light",
    ghost: "text-foreground hover:bg-surface",
  };

  const classes = `${base} ${variants[variant]} ${className} ${disabled ? "opacity-60 cursor-not-allowed" : ""}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
