import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    role: "Cliente - Derecho Penal",
    text: "Gracias al Lic. Mendoza recuperé mi libertad y mi dignidad. Su profesionalismo y dedicación fueron excepcionales en todo momento.",
  },
  {
    name: "Roberto Hernández",
    role: "Director General, Grupo RH",
    text: "Su asesoría corporativa ha sido fundamental para el crecimiento de nuestra empresa. Un abogado de primer nivel.",
  },
  {
    name: "Ana Lucía Domínguez",
    role: "Cliente - Derecho Familiar",
    text: "En el momento más difícil de mi vida, encontré en Avvocati Legale la empatía y la fortaleza legal que necesitaba.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="brand-line w-12 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            La confianza de nuestros clientes es nuestro mayor logro.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 bg-card border border-border rounded-lg relative"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-muted-foreground font-body leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="brand-line w-8 mb-4" />
              <p className="font-display font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground font-body">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
