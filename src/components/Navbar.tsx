import { Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import logoLight from "@/assets/logo-horizontal-light.png";
import logoDark from "@/assets/logo-horizontal-dark.png";

const navItems = ["Inicio", "Sobre Nosotros", "Servicios", "Logros", "Contacto"];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#">
          <img
            src={theme === "dark" ? logoDark : logoLight}
            alt="Avvocati Legale"
            className="h-10"
          />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors tracking-wider uppercase"
            >
              {item}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-border hover:bg-muted transition-colors"
            aria-label="Cambiar tema"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-foreground" /> : <Moon className="w-4 h-4 text-foreground" />}
          </button>
        </div>
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-border hover:bg-muted transition-colors"
            aria-label="Cambiar tema"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-foreground" /> : <Moon className="w-4 h-4 text-foreground" />}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2" aria-label="Menú">
            {mobileOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors tracking-wider uppercase"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
