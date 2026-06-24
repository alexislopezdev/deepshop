export default function Logo({ className = "" }) {
  return (
    <span
      className={`font-display text-xl font-black tracking-wider uppercase sm:text-2xl ${className}`}
    >
      <span className="text-foreground">Deep</span>
      <span className="text-primary">Shop</span>
    </span>
  );
}
