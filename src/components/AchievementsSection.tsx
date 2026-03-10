import lawyerCourthouse from "@/assets/lawyer-courthouse.jpg";

const achievements = [
  { year: "2024", title: "Premio Nacional al Mérito Jurídico", desc: "Reconocimiento por trayectoria destacada en la defensa de derechos civiles." },
  { year: "2021", title: "Conferencista Internacional", desc: "Ponente principal en el Foro Iberoamericano de Derecho Penal en Madrid, España." },
  { year: "2018", title: "Caso Emblemático - Sentencia Histórica", desc: "Victoria en caso de precedente legal que benefició a más de 2,000 familias." },
  { year: "2015", title: "Miembro del Colegio Nacional de Abogados", desc: "Ingreso por méritos al Colegio como miembro distinguido." },
  { year: "2010", title: "Maestría Magna Cum Laude", desc: "Graduado con honores de la Maestría en Derecho Penal y Criminología." },
];

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
          <div className="lg:col-span-3 space-y-0">
            {achievements.map((a, i) => (
              <div key={i} className="relative flex gap-8 pb-12 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0 mt-2" />
                  {i < achievements.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="pb-2">
                  <span className="text-sm font-body font-semibold text-primary tracking-wider">{a.year}</span>
                  <h3 className="text-xl font-display font-semibold text-foreground mt-1 mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
