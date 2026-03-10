import logoIcon from "@/assets/logo-icon.png";

const Footer = () => (
  <footer className="py-8 border-t border-border bg-card">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img src={logoIcon} alt="Avvocati Legale" className="h-8" />
        <span className="font-display text-sm text-foreground">Avvocati Legale · Derecho Penal</span>
      </div>
      <p className="text-xs text-muted-foreground font-body">
        © {new Date().getFullYear()} Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
