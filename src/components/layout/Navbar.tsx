import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { id: "home", label: "Home" },
    { id: "features", label: "Nosotros" },
    { id: "assets", label: "Productos" },
    { id: "pricing", label: "Contáctanos" },
  ];
  //Generacion dinamica de los links para aplicar los efectos dependiendo de la seccion
  return (
    <nav className="flex justify-end lg:items-center p-4 lg:justify-center">
      <ul className="gap-3 px-1 py-3 justify-center border border-gray-300 rounded-full font-medium text-lg hidden lg:flex">
        {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setActive(link.id)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  active === link.id
                    ? "border border-solid border-blue-800 bg-blue-800 text-white"
                    : "text-black hover:text-blue-800"
                }`}
              >
                {link.label}
              </a>
            </li>
        ))}
      </ul>

      <button
        className="justify-between p-2 text-gray-700 focus:outline-none lg:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {" "}
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
