import React from "react";
import Card from "../../components/Card";
import { Binoculars, Bird, Sparkle } from "lucide-react";
import Section from "../../components/Section";
import Container from "../../components/Container";

const items = [
  {
    icon: <Sparkle />,
    cardTitle: "Seguridad de la Información",
    cardDescription:
      "Protegemos los datos críticos de su empresa mediante soluciones avanzadas de ciberseguridad, garantizando confidencialidad, integridad y disponibilidad.",
  },
  {
    icon: <Bird />,
    cardTitle: "Segunda card",
    cardDescription:
      "Ofrecemos asesoramiento experto para optimizar su infraestructura tecnológica, mejorar procesos y adoptar las mejores prácticas en gestión de TI.",
  },
  {
    icon: <Binoculars />,
    cardTitle: "Consultoría en TI",
    cardDescription:
      "Ofrecemos asesoramiento experto para optimizar su infraestructura tecnológica, mejorar procesos y adoptar las mejores prácticas en gestión de TI.",
  },
  {
    cardTitle: "Cuarta card",
    cardDescription: "Descripción de la cuarta card",
  }
];

type CardSectionProps = {
  title?: string;
  description?: string;
};

const CardSection: React.FC<CardSectionProps> = ({ title, description }) => {
  return (
    <Section>
      <Container flex="static">
        <div className="text-center">
          <h1 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold mb-2">
            {title}
          </h1>
        </div>
        <p className="text-[clamp(1.2rem,0.95vw,1.5rem)]">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {React.Children.toArray(
            items.map((items, index) => (
              <div key={index} className="h-full">
                <Card {...items} />
              </div>
            ))
          )}
        </div>
      </Container>
    </Section>
  );
};

export default CardSection;
