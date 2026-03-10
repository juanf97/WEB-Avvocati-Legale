import { Shield, Users, Building2, FileText, Gavel, Scale } from "lucide-react";
import lawyerDetail from "@/assets/lawyer-detail.jpg";

const services = [
  { icon: Gavel, title: "Derecho Penal", desc: "Defensa en procesos penales, amparos y recursos legales con estrategia sólida." },
  { icon: Building2, title: "Derecho Corporativo", desc: "Asesoría legal para empresas, contratos mercantiles y cumplimiento normativo." },
  { icon: Users, title: "Derecho Familiar", desc: "Divorcios, custodia, pensiones alimenticias y sucesiones testamentarias." },
  { icon: FileText, title: "Derecho Civil", desc: "Contratos, arrendamientos, compraventa de inmuebles y litigios civiles." },
  { icon: Shield, title: "Derechos Humanos", desc: "Protección de garantías individuales y defensa ante organismos internacionales." },
  { icon: Scale, title: "Derecho Laboral", desc: "Representación en conflictos laborales, despidos injustificados y prestaciones." },
  
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
          <div className="lg:col-span-2">
            <div className="brand-line w-12 mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Áreas de Práctica
            </h2>
            <p className="text-muted-foreground font-body max-w-xl">
              Ofrezco representación legal integral en diversas ramas del derecho, con la experiencia y dedicación que su caso merece.
            </p>
          </div>
          <div className="hidden lg:block rounded-lg overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
            <img src={lawyerDetail} alt="Símbolos de justicia" className="w-full h-56 object-cover" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-8 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <s.icon className="w-8 h-8 text-primary mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
