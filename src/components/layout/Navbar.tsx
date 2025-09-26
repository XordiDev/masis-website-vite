import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const links = [
    { id: "home", label: "Home" },
    { id: "aboutus", label: "Nosotros" },
    { id: "products", label: "Productos" },
    { id: "contactus", label: "Contáctanos" },
  ];
  //Generacion dinamica de los links para aplicar los efectos dependiendo de la seccion
  return (
    <nav className="w-full flex justify-center mt-6">
      <ul className="flex gap-3 px-1 py-3 border border-gray-300 rounded-full font-medium text-lg">
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
    </nav>
  );
};

export default Navbar;
