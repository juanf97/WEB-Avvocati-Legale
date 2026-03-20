import lawyerCourthouse from "@/assets/lawyer-courthouse.jpg";

const AchievementsSection = () => {
  return (
    <section id="logros" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="brand-line w-12 mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Trayectoria y Logros
            </h2>
            <p className="text-muted-foreground font-body">
              Un recorrido de dedicación y resultados comprobados.
            </p>
            <div className="rounded-lg overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
              <img src={lawyerCourthouse} alt="Abogado frente al tribunal" className="w-full h-80 object-cover" />
            </div>
          </div>
          <div className="lg:col-span-3 lg:pt-16">
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
              Defensa penal estratégica con rigor académico y resultados reales
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed text-justify md:text-lg mt-6">
              Con más de 10 años de trayectoria, el Dr. David Esteban Giraldo Calderón lidera <strong>AVVOCATILEGALE</strong> integrando <strong>litigio de alto nivel</strong>, <strong>consultoría estratégica</strong> y academia para proteger con precisión jurídica los derechos de cada representado.
            </p>
            <ul className="space-y-4 text-muted-foreground font-body leading-relaxed md:text-lg mt-6">
              <li className="border-l-2 border-primary pl-4">
                <span className="text-primary mr-2">●</span>
                +10 años en litigio penal y representación de intereses complejos.
              </li>
              <li className="border-l-2 border-primary pl-4">
                <span className="text-primary mr-2">●</span>
                Apoderado de víctimas ante la Fiscalía General de la Nación.
              </li>
              <li className="border-l-2 border-primary pl-4">
                <span className="text-primary mr-2">●</span>
                Capacitador de servidores públicos en contratación estatal y corrupción pública.
              </li>
              <li className="border-l-2 border-primary pl-4">
                <span className="text-primary mr-2">●</span>
                Docente universitario en Derecho Penal con enfoque práctico y especializado.
              </li>
            </ul>
            <p className="text-muted-foreground font-body leading-relaxed text-justify md:text-lg mt-6">
              Su respaldo académico internacional incluye estudios en la Universidad de Medellín, la Universidad Pontificia Bolivariana y su condición de <strong>Doctorando en Derecho Penal</strong> en la UBA, junto con formación en Filosofía y estudios complementarios en Derecho Penal Económico, criminalística y mediación penal para la <strong>resolución de conflictos penales complejos</strong>.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-body font-semibold text-primary-foreground transition-opacity hover:opacity-90 mt-6"
            >
              Agenda una consulta estratégica
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
