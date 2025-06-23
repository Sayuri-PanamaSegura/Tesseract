import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SeccionConImagenLateral from "./SeccionConImagenLateral";

import "swiper/css";
import "swiper/css/navigation";

export default function SolucionesCarousel() {
  // Texto dividido en fragmentos para negritas donde quieres
  const slides = [
    {
      src: "/sitio/image-30.png",
      text: [
        { content: "Infraestructura alojada en ", bold: false },
        { content: "México", bold: true },
        { content: ": soberanía, cumplimiento y baja latencia.", bold: false },
      ],
    },
    {
      src: "/sitio/image.png",
      text: [
        { content: "Almacenamiento, firma y cifrado de llaves con ", bold: false },
        { content: "HSMs certificados", bold: true },
        { content: " (FIPS 140-2 Nivel 3).", bold: false },
      ],
    },
    {
      src: "/sitio/image-2.png",
      text: [
        { content: "APIs RESTful", bold: true },
        { content: " para cifrado, firma, validación de integridad y verificación de identidad.", bold: false },
      ],
    },
    {
      src: "/sitio/image-1.png",
      text: [
        { content: "Automatización de rotación de claves, auditoría y ciclo de vida con ", bold: false },
        { content: "Key Manager", bold: true },
        { content: ".", bold: false },
      ],
    },
    {
      src: "/sitio/image-4.png",
      text: [
        { content: "Control criptográfico", bold: true },
        { content: " sobre cada transacción: desde una transferencia bancaria hasta la emisión de certificados.", bold: false },
      ],
    },
    {
      src: "/sitio/image-3.png",
      text: [
        { content: "Modelos híbridos, multinube y on-premise compatibles.", bold: true },
      ],
    },
  ];

  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const maxSteps = 3;

  const handleSlide = (direction, steps) => {
    if (!swiperInstance) return;

    const current = swiperInstance.activeIndex;
    const total = swiperInstance.slides.length;

    const nextIndex =
      direction === "next" ? current + steps : current - steps;

    if (nextIndex >= 0 && nextIndex < total) {
      swiperInstance.slideTo(nextIndex);
      setActiveIndex(nextIndex);
    }
  };

  return (
    <section className="max-w-6xl mx-auto pt-16 px-6 py-16">
      <SeccionConImagenLateral
        client:visible
        id="autenticacion"
        titulo="Custodia criptográfica de datos y transacciones críticas"
        texto='Garantiza la <span class="font-semibold">integridad</span>, <span class="font-semibold">privacidad</span> y <span class="font-semibold">trazabilidad</span> de los datos sensibles a través de bóvedas HSM, APIs seguras y Key Management centralizado.'
        iconoDefault="/carrusel/off.png"
        iconoActivo="/carrusel/on.png"
      />

      {/* Flechas arriba derecha */}
      <div className="flex justify-end mt-4 mb-6">
        <div className="flex items-center space-x-2">
          {[...Array(maxSteps)].map((_, i) => {
            const steps = i + 1;
            const isActive = activeIndex === swiperInstance?.activeIndex - steps;
            const disabled = !swiperInstance || swiperInstance.activeIndex < steps;

            return (
              <button
                key={`prev-${steps}`}
                onClick={() => handleSlide("prev", steps)}
                disabled={disabled}
                className={`text-[80px] leading-[0.8] px-[1px] font-thin transition-colors ${
                  isActive ? "text-[#CEFF1C]" : "text-white hover:text-[#CEFF1C]"
                } ${disabled ? "opacity-30 cursor-not-allowed" : ""}`}
              >
                ‹
              </button>
            );
          })}

          {[...Array(maxSteps)].map((_, i) => {
            const steps = i + 1;
            const isActive = activeIndex === swiperInstance?.activeIndex + steps;
            const disabled =
              !swiperInstance ||
              swiperInstance.activeIndex + steps >= swiperInstance.slides.length;

            return (
              <button
                key={`next-${steps}`}
                onClick={() => handleSlide("next", steps)}
                disabled={disabled}
                className={`text-[80px] leading-[0.8] px-[1px] font-thin transition-colors ${
                  isActive ? "text-[#CEFF1C]" : "text-white hover:text-[#CEFF1C]"
                } ${disabled ? "opacity-30 cursor-not-allowed" : ""}`}
              >
                ›
              </button>
            );
          })}
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        onSwiper={setSwiperInstance}
        className="cursor-grab"
        breakpoints={{
          0: {
            slidesPerView: 1.1,
            spaceBetween: 12,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 24,
          },
        }}
      >
        {slides.map(({ src, text }, i) => (
          <SwiperSlide
            key={i}
            className="neon-border p-6 flex flex-col items-center justify-start min-h-[220px] h-full"
          >
            <img
              src={src}
              alt=""
              className="mb-4 h-16 w-16 object-contain"
              loading="lazy"
            />
            <p className="text-sm text-start leading-relaxed flex-1">
              {text.map(({ content, bold }, j) =>
                bold ? (
                  <strong key={j} className="font-semibold">
                    {content}
                  </strong>
                ) : (
                  <span key={j}>{content}</span>
                )
              )}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
