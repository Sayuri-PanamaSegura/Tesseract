import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/swiper-bundle.css";

export default function LogosSwiper() {
  return (
    <div className="py-10">
      {/* Opcional: Título */}
      <div className="max-w-6xl mx-auto text-center mb-4">
       <p className="text-lg font-medium text-white font-poppins">Empresas que ya protegemos</p>

      </div>

      <div className="max-w-6xl mx-auto">
        <Swiper
  
  modules={[Autoplay]}
  loop={true}
  freeMode={true}
  cssMode={false}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  }}
  speed={1500}
  slidesPerView={2}
  spaceBetween={0}
  breakpoints={{
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  }}
>

  


          {/* Logos directamente aquí */}
          {[
            
            "/carrusel/01_CajaMorelia-White.png",
            "/carrusel/02_Aspel-White.png",
            "/carrusel/03_CajaSMG-White.png",
            "/carrusel/04_Fincomu.png",
            "/carrusel/05_BancoDonde-White.png",
            "/carrusel/06_UpSiVale-White.png",
          ].map((logoSrc, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-28 w-full">
                <div className="h-24 w-40 flex items-center justify-center">
                  <img
                    src={logoSrc}
                    alt={`Logo ${index + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
