import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const links = [
    { id: "home", label: "Home" },
    { id: "aboutus", label: "Nosotros" },
    { id: "products", label: "Productos" },
    { id: "contactus", label: "Contáctanos" },
  ];

  const handleClick = (e: React.MouseEvent) => {
    console.log(e)
  }

  //Generacion dinamica de los links para aplicar los efectos dependiendo de la seccion
  return (
    <nav className="w-full flex justify-end bg-blue-800 p-3 lg:bg-transparent lg:mt-6 lg:w-full lg:flex lg:justify-center">
      <button onClick={handleClick} className="border border-white p-2 mr-2 lg:hidden ">
      <Menu color="#ffffff" />
      </button>

      <ul
        className="
      hidden lg:flex gap-3 px-1 py-3 border-2 border-gray-300 rounded-full font-medium
      "
      >
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
