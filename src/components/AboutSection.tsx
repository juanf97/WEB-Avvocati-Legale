import { Award, BookOpen, Briefcase } from "lucide-react";
import lawyerOffice from "@/assets/lawyer-office.jpg";

const highlights = [
  { icon: Briefcase, label: "20+ Años", desc: "de experiencia legal" },
  { icon: Award, label: "500+", desc: "casos ganados" },
  { icon: BookOpen, label: "Maestría", desc: "en Derecho Penal" },
];

const AboutSection = () => {
  return (
    <section id="sobre-nosotros" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="brand-line w-12 mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Sobre Nosotros
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Soy el Licenciado Carlos Mendoza, abogado egresado de la Universidad Nacional con especialización en Derecho Penal y Corporativo. A lo largo de mi carrera, he representado a cientos de clientes en casos de alta complejidad.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Mi compromiso es brindar una representación legal de excelencia, combinando un profundo conocimiento jurídico con un trato humano y personalizado para cada caso.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              He sido reconocido por diversas instituciones por mi labor destacada en la defensa de los derechos civiles y he participado como conferencista en foros internacionales de derecho.
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-lg overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
              <img src={lawyerOffice} alt="Abogado en su oficina" className="w-full h-64 object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center text-center p-4 bg-secondary rounded-lg border border-border"
                >
                  <item.icon className="w-6 h-6 text-primary mb-2" />
                  <p className="text-xl font-display font-bold text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground font-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
