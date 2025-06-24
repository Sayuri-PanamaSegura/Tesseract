import { useEffect, useRef, useState } from "react";

export default function AvisoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="underline text-sm hover:text-white"
      >
        Aviso de Privacidad
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4"
          onClick={handleBackdropClick}
        >
          <div
            ref={modalRef}
            className="bg-white max-w-3xl w-full max-h-[90vh] p-6 rounded-lg shadow-xl overflow-y-auto relative"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-4 text-gray-500 hover:text-black text-2xl font-bold"
              aria-label="Cerrar"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4">Aviso de Privacidad</h2>
            <div className="text-sm text-gray-800 space-y-4">
              <p>
                En cumplimiento a lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento, se emite el presente Aviso de Privacidad por parte de <strong>OPCIONES DE SEGURIDAD INFORMÁTICA, S.A.P.I. DE C.V.</strong>, en adelante <strong>TESSERACT</strong>, con domicilio en Av. Ejército Nacional Mexicano 453, Polanco IV Sección, Miguel Hidalgo, 11520 Ciudad de México, CDMX.
              </p>

              <p>
                <strong>Finalidad del tratamiento de los datos:</strong> Los datos recabados actualmente o en el futuro se utilizarán para:
              </p>

              <ul className="list-disc list-inside space-y-1">
                <li>Nombres</li>
                <li>Apellidos</li>
                <li>RFC</li>
                <li>Número de teléfono</li>
                <li>Correo electrónico</li>
                <li>Ubicación (exacta o aproximada)</li>
                <li>Sistema Operativo (nombre y versión)</li>
                <li>Lenguajes de programación y apps utilizadas</li>
                <li>MAC, IMEI, modelo, serie y marca del dispositivo</li>
                <li>Dirección IP</li>
                <li>Identificación oficial y sus datos</li>
                <li>Comprobante de domicilio</li>
                <li>Fotografía y/o video selfie</li>
                <li>Firma manuscrita y e-firma</li>
              </ul>

              <p>
                Estos datos serán utilizados para proporcionar referencias a empresas relacionadas, ofrecer productos y servicios, enviar promociones o campañas, informar cambios, cumplir obligaciones legales y realizar estudios de mercado.
              </p>

              <p>
                La plataforma de Administración de TESSERACT (<a href="https://admin.tesseract.mx" className="underline text-purple-700" target="_blank" rel="noopener noreferrer">https://admin.tesseract.mx</a>) almacena esta información usando cifrado AES 256.
              </p>

              <p>
                La app <strong>Tesseract Authenticator</strong> requiere acceso a la cámara del dispositivo para escanear códigos QR.
              </p>

              <p>
                El sitio web <a href="https://tesseract.mx" className="underline text-purple-700" target="_blank" rel="noopener noreferrer">tesseract.mx</a> también recolecta datos mediante el chat, siguiendo los mismos lineamientos de protección.
              </p>

              <p>
                TESSERACT se compromete a proteger sus datos mediante medidas administrativas, técnicas y físicas, asegurando que solo personal autorizado tenga acceso.
              </p>

              <p>
                Los datos son recabados a través de los sistemas informáticos de TESSERACT como bases de datos, CRM, aplicaciones móviles y formularios digitales.
              </p>

              <p>
                TESSERACT se obliga a cumplir con los principios de licitud, consentimiento, información, calidad, finalidad, lealtad, proporcionalidad y responsabilidad conforme a la LFPDPPP.
              </p>

              <p>
                Conforme al artículo 22 de la LFPDPPP, usted tiene derecho a ejercer los derechos de acceso, rectificación, cancelación y oposición (ARCO), mediante correo a <a className="underline text-purple-700" href="mailto:contacto@tesseract.mx">contacto@tesseract.mx</a> o por escrito al domicilio de TESSERACT.
              </p>

              <p>
                TESSERACT se reserva el derecho de modificar este aviso en cualquier momento. Cualquier cambio será publicado en nuestro sitio web: <a href="https://tesseract.mx" className="underline text-purple-700">tesseract.mx</a>.
              </p>

              <p>
                Al utilizar la página web o la aplicación de TESSERACT, usted manifiesta su consentimiento al presente Aviso de Privacidad.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
