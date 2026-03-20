import { Phone, Mail, MapPin, Clock } from "lucide-react";
import lawyerMeeting from "@/assets/lawyer-meeting.jpg";

const contactInfo = [
  { icon: Phone, label: "+57 3016909875" },
  { icon: Mail, label: "avvocatilegale@avvocatilegale.com" },
  { icon: MapPin, label: "Carrera 76  # 53-200, Medellín, Colombia" },
  { icon: Clock, label: "Lun - Vie: 8:00 AM - 6:00 PM" },
];

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.56 0 .27 5.3.27 11.8c0 2.07.54 4.1 1.57 5.89L0 24l6.5-1.8a11.77 11.77 0 0 0 5.56 1.42h.01c6.5 0 11.79-5.3 11.79-11.8a11.75 11.75 0 0 0-3.34-8.34Zm-8.46 18.1h-.01a9.84 9.84 0 0 1-5.01-1.38l-.36-.22-3.86 1.07 1.03-3.76-.24-.39A9.8 9.8 0 0 1 2.06 11.8c0-5.51 4.48-9.98 9.99-9.98 2.67 0 5.18 1.04 7.07 2.93a9.9 9.9 0 0 1 2.93 7.05c0 5.51-4.48 9.99-9.99 9.99Zm5.48-7.49c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.2-.24-.58-.49-.5-.66-.5h-.56c-.2 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.43 0 1.43 1.05 2.81 1.19 3 .15.2 2.05 3.12 4.98 4.37.7.3 1.24.48 1.67.62.7.22 1.33.2 1.84.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.56-.35Z" />
  </svg>
);

const ContactSection = () => {
  const whatsappUrl = "https://wa.me/573016909875?text=Hola%2C%20quiero%20agendar%20una%20consulta%20con%20AVVOCATILEGALE.";

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
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-body font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Escribir por WhatsApp
            </a>
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
