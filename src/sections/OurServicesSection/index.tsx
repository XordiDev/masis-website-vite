import React from "react";
import Section from "../../components/Section";
import Container from "../../components/Container";
import { Subtitle, Title } from "../../components/Text";
import { Home } from "lucide-react";
import Card from "../../components/Card";

type OurServicesSectionProps = {
  title?: string;
  description?: string;
};

const items = [
  {
    icon: <Home />,
    cardTitle: "Seguridad y planes de contingencia",
    cardDescription:
      "Según sus necesidades y presupuesto, le ayudamos a implementar backup de su información y medidas de contingencia y recuperación rápida",
    button: "Saber Más",
  },
  {
    icon: <Home />,
    cardTitle: "Concientización en ciberseguridad.",
    cardDescription:
      "Capacitamos a su equipo para prevenir ataques y responder con confianza ante riesgos digitales.",
    button: "Saber Más",
  },
  {
    icon: <Home />,
    cardTitle: "Evaluación básica de riesgos",
    cardDescription:
      "Evaluamos su entorno tecnológico para identificar fallas, enfocar las correcciones necesarias, optimizar recursos y minimizar riesgos de seguridad.",
    button: "Saber Más",
  },
  {
    icon: <Home />,
    cardTitle: "Seguridad Perimetral con SOPHOS",
    cardDescription:
      "Protegemos su red empresarial con soluciones perimetrales SOPHOS: firewalls avanzados, prevención de intrusiones y control de acceso.",
    button: "Saber Más",
  },
  {
    icon: <Home />,
    cardTitle: "Seguridad Endpoint con PANDA 360",
    cardDescription:
      "Su red empresarial más segura con PANDA 360: antivirus, prevención de amenazas y administración centralizada en un solo lugar",
    button: "Saber Más",
  },
  {
    icon: <Home />,
    cardTitle: "Comercialización de Hardware y Software",
    cardDescription:
      "Ofrecemos hardware como RAM, discos, PCs y portátiles, junto con software de seguridad (Kaspersky, Panda, Sophos), respaldo con Acronis y licencias Microsoft originales.",
    button: "Saber Más",
  },
];

const OurServicesSection: React.FC<OurServicesSectionProps> = ({
  title,
  description,
}) => {
  return (
    <Section>
      <Container flex="static">
        <div>
          <div>
            <Title className="mb-5">{title}</Title>
            <Subtitle className="mb-10">{description}</Subtitle>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {React.Children.toArray(
              items.map((items, index) => (
                <div key={index} className="h-full">
                  <Card {...items} />
                </div>
              ))
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default OurServicesSection;
