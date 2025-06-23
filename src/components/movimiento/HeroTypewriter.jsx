import { useEffect, useState } from "react";

const frases = [
  "Protegemos cada",
  "dato con tecnología",
  "de vanguardia",
];

export default function HeroTypewriterSecuencial() {
  const [lineaActual, setLineaActual] = useState(0);
  const [textoMostrado, setTextoMostrado] = useState(["", "", ""]);
  const [mostrarCursor, setMostrarCursor] = useState(true);

  useEffect(() => {
    if (lineaActual >= frases.length) return;

    const frase = frases[lineaActual];
    let i = 0;

    const escribir = setInterval(() => {
      setTextoMostrado((prev) => {
        const nuevo = [...prev];
        nuevo[lineaActual] = frase.slice(0, i + 1);
        return nuevo;
      });
      i++;

      if (i === frase.length) {
        clearInterval(escribir);
        setTimeout(() => setLineaActual((prev) => prev + 1), 800);
      }
    }, 25); // Velocidad de tipeo

    return () => clearInterval(escribir);
  }, [lineaActual]);

  // Parpadeo del cursor solo al final
  useEffect(() => {
    const intervalo = setInterval(() => {
      setMostrarCursor((prev) => !prev);
    }, 600);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="text-3xl md:text-5xl font-light text-[#CEFF1C] font-mono leading-[1.08] space-y-3">
      {frases.map((frase, i) => (
        <div key={i}>
          {textoMostrado[i]}
          {i === frases.length - 1 && textoMostrado[i].length === frase.length && mostrarCursor && (
            <span className="inline-block w-[1ch] animate-pulse">|</span>
          )}
        </div>
      ))}
    </div>
  );
}
