import heroImage from "@/assets/hero-lawyer.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Oficina de abogado profesional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/75 dark:bg-background/70" />
      </div>
      <div className="relative container mx-auto px-6 pt-24">
        <div className="max-w-2xl">
          <div className="brand-line w-16 mb-8 opacity-0 animate-fade-up" />
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Defensa Legal con{" "}
            <span className="text-brand-gradient">Experiencia</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-body font-light leading-relaxed mb-10 max-w-lg opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Más de 20 años defendiendo los derechos de mis clientes con dedicación, ética profesional y resultados comprobados.
          </p>
          <a
            href="#contacto"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity opacity-0 animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            Consulta Gratuita
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
