import { Phone, Mail, MapPin, Clock } from "lucide-react";
import lawyerMeeting from "@/assets/lawyer-meeting.jpg";

const contactInfo = [
  { icon: Phone, label: "+57 3016909875" },
  { icon: Mail, label: "avvocatilegale@avvocatilegale.com" },
  { icon: MapPin, label: "Carrera 76  # 53-200, Medellín, Colombia" },
  { icon: Clock, label: "Lun - Vie: 8:00 AM - 6:00 PM" },
];

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="brand-line w-12 mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Contácteme
            </h2>
            <p className="text-muted-foreground font-body mb-10 leading-relaxed">
              Agende una consulta gratuita para evaluar su caso. La primera cita es sin compromiso.
            </p>
          </div>
          <div className="hidden lg:block rounded-lg overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
            <img src={lawyerMeeting} alt="Reunión con clientes" className="w-full h-48 object-cover" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-5">
            {contactInfo.map((c) => (
              <div key={c.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <c.icon className="w-5 h-5 text-primary flex-shrink-0" />
                </div>
                <span className="text-foreground font-body">{c.label}</span>
              </div>
            ))}
          </div>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Nombre completo"
              className="w-full px-5 py-4 bg-background border border-border rounded-lg text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full px-5 py-4 bg-background border border-border rounded-lg text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="tel"
              placeholder="Teléfono"
              className="w-full px-5 py-4 bg-background border border-border rounded-lg text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              rows={4}
              placeholder="Describa brevemente su caso..."
              className="w-full px-5 py-4 bg-background border border-border rounded-lg text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity rounded-lg"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
