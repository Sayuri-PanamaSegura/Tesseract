import { useEffect, useRef, useState } from "react";

export default function SeccionConImagenLateral({
  id,
  titulo = "Título especial",
  texto = "Texto de esta sección.",
  iconoDefault = "/icons/lock.png",
  iconoActivo = "/icons/lock-green.png",
  colorActivo = "#C5FD83",
}) {
  const ref = useRef(null);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    const section = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;
        if (ratio >= 0.6) {
          section.classList.add("activo-scroll");
          setActivo(true);
        } else if (ratio < 0.1) {
          section.classList.remove("activo-scroll");
          setActivo(false);
        }
      },
      {
        threshold: [0.1, 0.6],
      }
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className="relative py- 4 transition-all duration-500"
    >
      <div className="max-w-5xl mx-auto px-4 text-start">
        {/* Título con ícono circular */}
        <div className="flex items-center gap-4 mb-6">
           <img
              src={activo ? iconoActivo : iconoDefault}
              alt="Icono"
              className="w-20 h-20"
            />
         
          <h2
            className="text-2xl md:text-3xl font-semibold font-mono transition-colors duration-500"
            style={{ color: activo ? colorActivo : "var(--color-texto)" }}
          >
            {titulo}
          </h2>
        </div>

        {/* Texto descriptivo */}
        <div
  className="border-l-4 transition-colors duration-500 pl-6"
  style={{ borderColor: activo ? colorActivo : "#C5FD83" }}
>

       <p
  className="text-base md:text-lg font-poppins text-white leading-relaxed max-w-3xl mb-12"
  dangerouslySetInnerHTML={{ __html: texto }}
/>
        </div>
      </div>
    </section>
  );
}
