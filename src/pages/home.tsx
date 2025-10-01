import CardSection from "../sections/CardSection";
import Hero from "../sections/Hero";

import HeroImage from "../assets/banner-img.png";
import { HomeIcon, Users } from "lucide-react";
import ServiceImage from "../assets/about_img.png";
import AboutSection from "../sections/AboutSection";
import OurServicesSection from "../sections/OurServicesSection";

const CARDS = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Personal calificado",
    description:
      "MASIS SAS combina la experiencia de su equipo con el respaldo de asesores altamente calificados, ofreciendo siempre un servicio confiable y oportuno.",
  },
  {
    icon: <HomeIcon className="w-6 h-6" />,
    title: "Red de socios",
    description:
      "Gracias a nuestra red de socios estratégicos, en MASIS SAS ofrecemos soluciones integrales que facilitan la vida de nuestros clientes y les permiten optimizar recursos.",
  },
];

const Home = () => {
  return (
    <div id="home-page">
      <Hero
        title="MASIS SAS"
        button="Leer Más"
        linkTo="#services"
        description="Nos especializamos en soluciones para la protección de la información de su empresa, enfocado a PYMES en el Valle del Cauca"
        bgMediaProps={{
          media: HeroImage,
        }}
      />

      <CardSection
        title="¿Quiénes somos?"
        description="Desde 1998, MASIS ha sido una solución confiable y efectiva para las necesidades del área de TI en el segmento MIPYMES.
Ofrecemos servicios de alta calidad, respaldados por un proceso continuo de mejora en nuestras metodologías, y un balance óptimo entre costo y beneficio en soporte técnico."
        sectionId="services"
      />

      <AboutSection
        title="¿Qué hacemos?"
        image={ServiceImage}
        description="En MASIS nos especializamos en brindar soporte técnico a MIPYMES, ayudándolas a aprovechar los avances tecnológicos para incrementar su productividad."
        cards={CARDS}
      />

      <OurServicesSection
        title="Nuestros servicios"
        description="En MASIS SAS trabajamos con dedicación para darte la mejor atención y soluciones a la medida. Aquí encontrarás nuestros productos y servicios."
      />
    </div>
  );
};

export default Home;
