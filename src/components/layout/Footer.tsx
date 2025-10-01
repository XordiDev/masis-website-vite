const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-700 to-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Sobre nosotros */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Sobre Nosotros</h3>
          <div className="w-12 h-0.5 bg-blue-400 mb-4"></div>
          <p className="text-sm leading-relaxed">
            Nos especializamos en soluciones para la protección de la
            información de su empresa, enfocado a PYMES en el Valle del Cauca.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Enlaces Rápidos</h3>
          <div className="w-12 h-0.5 bg-blue-400 mb-4"></div>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#inicio" className="hover:underline">
                Inicio
              </a>
            </li>
            <li>
              <a href="#nosotros" className="hover:underline">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#servicios" className="hover:underline">
                Servicios
              </a>
            </li>
            <li>
              <a href="#productos" className="hover:underline">
                Productos
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contacto</h3>
          <div className="w-12 h-0.5 bg-blue-400 mb-4"></div>
          <ul className="space-y-2 text-sm">
            <li>Email: recepcion@grupomasis.com</li>
            <li>Teléfono: 3176797366</li>
            <li>
              Dirección: Cra 1 # 61A-30 - C.C. Colón Plaza Oficina 11, 2do piso,
              Cali
            </li>
          </ul>
        </div>

        {/* Síguenos */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Síguenos</h3>
          <div className="w-12 h-0.5 bg-blue-400 mb-4"></div>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-400">
              🌐
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-400">
              📸
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm">
        © 2025 Masis SAS. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
