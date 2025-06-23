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
  return (
    <div className="h-[38vh] w-full md:hidden mt-4">
      <Swiper
        direction="vertical"
        slidesPerView={2.3}
        spaceBetween={20}
        pagination={{ clickable: true }}
        mousewheel={true}
        modules={[Pagination, Mousewheel]}
        className="h-full"
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
    </div>
  );
}
