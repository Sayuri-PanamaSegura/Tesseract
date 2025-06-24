import { useEffect, useRef, useState } from "react";

const frases = [
  "Protegemos cada",
  "dato con tecnología",
  "de vanguardia",
];

export default function HeroTypewriterSecuencial() {
  const [textoMostrado, setTextoMostrado] = useState(frases.map(() => ""));
  const [mostrarCursor, setMostrarCursor] = useState(true);
  const [escrituraTerminada, setEscrituraTerminada] = useState(false);
  const textoActualRef = useRef(frases.map(() => ""));

  useEffect(() => {
    let linea = 0;
    let i = 0;

    const escribir = () => {
      const interval = setInterval(() => {
        const nuevo = [...textoActualRef.current];
        nuevo[linea] = frases[linea].slice(0, i + 1);
        textoActualRef.current = nuevo;
        setTextoMostrado(nuevo);

        i++;

        if (i >= frases[linea].length) {
          clearInterval(interval);
          linea++;
          i = 0;

          if (linea < frases.length) {
            setTimeout(escribir, 150);
          } else {
            setEscrituraTerminada(true);
          }
        }
      }, 25); // velocidad de escritura
    };

    escribir();
  }, []);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setMostrarCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="text-3xl md:text-5xl font-light text-[#CEFF1C] font-mono leading-[1.08] space-y-3">
      {frases.map((frase, i) => {
        const textoVisible = textoMostrado[i];
        const estaEscribiendo = textoVisible.length < frase.length;

        return (
          <div key={i} className="relative">
            {/* espacio reservado invisible */}
            <span className="invisible">{frase}</span>

            {/* texto visible animado encima */}
            <span className="absolute top-0 left-0 whitespace-pre">
              {textoVisible}
              {i === frases.length - 1 &&
                !estaEscribiendo &&
                escrituraTerminada &&
                mostrarCursor && (
                  <span className="inline-block w-[1ch] animate-pulse">|</span>
                )}
            </span>
          </div>
        );
      })}
    </div>
  );
}
