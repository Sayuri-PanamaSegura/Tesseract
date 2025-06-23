import { useEffect, useRef } from "react";

export default function SeccionConEfecto({
  id,
  titulo = "Título",
  texto = "Texto descriptivo aquí.",
  
}) {
  const ref = useRef(null);

useEffect(() => {
  const section = ref.current;

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.intersectionRatio >= 0.5) {
      section.classList.add("activo-scroll");
    } else if (entry.intersectionRatio < 0.1) {
      section.classList.remove("activo-scroll");
    }
  },
  {
    threshold: [0.1, 0.5],
  }
);


  if (section) observer.observe(section);
  return () => observer.disconnect();
}, []);

  return (
    <section
      id={id}
      ref={ref}
      className="relative py-4 transition-all duration-500"
    >
      <div className="max-w-5xl mx-auto text-start mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 transition-colors duration-500">
          {titulo}
        </h2>

       <div className="border-l-4 linea-lateral transition-colors duration-500 pl-6">

{/* Por esto */}
<p
  className="text-base md:text-lg font-poppins text-white leading-relaxed max-w-3xl mb-12"
  dangerouslySetInnerHTML={{ __html: texto }}
/>
        </div>

      </div>
    </section>
  );
}
