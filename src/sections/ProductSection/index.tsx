import React from "react";
import Section from "../../components/Section";
import Container from "../../components/Container";
import { Subtitle, Title } from "../../components/Text";
import { Home } from "lucide-react";
import Card from "../../components/Card";

type ProductSectionProps = {
  title?: string;
  description?: string;
};

const items = [
  {
    icon: <Home />,
    cardTitle: "Antivirus para endpoints.",
    cardDescription:
      "Aumente la seguridad de los equipos de su empresa.",
    button: "Saber Más",
  },
  {
    icon: <Home />,
    cardTitle: "Dispositivos firewall.",
    cardDescription:
      "Agregue una capa de seguridad adicional para la red de su negocio.",
    button: "Saber Más",
  },
  {
    icon: <Home />,
    cardTitle: "Soluciones de backup y contingencia.",
    cardDescription:
      "En casos de fallos de seguridad tenga siempre disponible su información y no interrumpa su operación",
    button: "Saber Más",
  },
  {
    icon: <Home />,
    cardTitle: "Componentes para computador.",
    cardDescription:
      "Adquiera con nosotros diademas, teclados, monitores y más",
    button: "Saber Más",
  },
  {
    icon: <Home />,
    cardTitle: "Equipos desktop y portatiles.",
    cardDescription:
      "Cotice con nosotros la compra de sus equipos",
    button: "Saber Más",
  }
];

const ProductSection: React.FC<ProductSectionProps> = ({
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

export default ProductSection;