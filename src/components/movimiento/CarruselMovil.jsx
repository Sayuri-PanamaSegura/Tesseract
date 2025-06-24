import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const tarjetas = [
  {
    texto: [
      { content: "Visibilidad, auditoría y ", bold: false },
      { content: "una sola consola", bold: true },
      { content: " para cumplimiento normativo", bold: false },
    ],
    clase: "rounded-br-2xl",
  },
  {
    texto: [
      { content: "Compatible", bold: true },
      { content: " con Google KMS, Azure Vault, AWS KMS y entornos CIAM / PKI", bold: false },
    ],
    clase: "rounded-bl-2xl rounded-br-2xl",
  },
  {
    texto: [
      { content: "Segmentación lógica", bold: true },
      { content: " por tenant, aplicación o entorno", bold: false },
    ],
    clase: "rounded-bl-2xl",
  },
  {
    texto: [
      { content: "Elimina dependencias", bold: true },
      { content: " de proveedores cloud sin sacrificar seguridad", bold: false },
    ],
    clase: "rounded-tr-2xl",
  },
  {
    texto: [
      { content: "Despliegue flexible:", bold: true },
      { content: " nube, híbrido o en sitio", bold: false },
    ],
    clase: "rounded-tl-2xl rounded-tr-2xl",
  },
  {
    texto: [
      { content: "Administración centralizada de llaves con ", bold: false },
      { content: "trazabilidad completa", bold: true },
      { content: " y control granular.", bold: false },
    ],
    clase: "rounded-tl-2xl",
  },
];

export default function CarruselMovil() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="relative h-[38vh] w-full md:hidden mt-4 flex flex-col items-center">
      <Swiper
        direction="vertical"
        slidesPerView={2.3}
        spaceBetween={20}
        pagination={{ clickable: true }}
        mousewheel={true}
        modules={[Pagination, Mousewheel]}
        className="h-full w-full"
        onSwiper={setSwiperInstance}
      >
        {tarjetas.map((t, i) => (
          <SwiperSlide key={i}>
            <div
              className={`text-white px-3 py-2 border border-white ${t.clase} flex items-center justify-center h-full`}
            >
              <p className="font-poppins text-xs leading-tight text-center">
                {t.texto.map((fragmento, j) =>
                  fragmento.bold ? (
                    <strong key={j} className="font-semibold">
                      {fragmento.content}
                    </strong>
                  ) : (
                    <span key={j}>{fragmento.content}</span>
                  )
                )}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Flecha abajo */}
      <button
  onClick={() => swiperInstance?.slideNext()}
  className="absolute -bottom-2 z-10 bg-transparent animate-bounce"
  aria-label="Siguiente"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-9 w-9 text-[#CEFF1C]"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 21c-.3 0-.6-.1-.8-.4l-7-9c-.3-.4-.3-1 0-1.4s1-.4 1.4 0L12 18.2l6.4-8c.3-.4 1-.4 1.4 0s.4 1 0 1.4l-7 9c-.2.3-.5.4-.8.4z"/>
  </svg>
</button>

    </div>
  );
}
