import React from "react";
import endpointImg from "../../assets/products/antivirus.jpg"
import firewallImg from "../../assets/products/firewall.jpg"
import backupImg from "../../assets/products/backup.jpg"
import laptopImg from "../../assets/products/portatildesktop.jpg"
import computerPartsImg from "../../assets/products/componentes.jpg"
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
    image:endpointImg,
    cardTitle: "Antivirus para endpoints.",
    cardDescription:
      "Aumente la seguridad de los equipos de su empresa.",
  },
  {
    image:firewallImg,
    cardTitle: "Dispositivos firewall.",
    cardDescription:
      "Agregue una capa de seguridad adicional para la red de su negocio.",
  },
  {
    image:backupImg,
    cardTitle: "Soluciones de backup y contingencia.",
    cardDescription:
      "En casos de fallos de seguridad tenga siempre disponible su información y no interrumpa su operación",
  },
  {
    image:computerPartsImg,
    cardTitle: "Componentes para computador.",
    cardDescription:
      "Adquiera con nosotros diademas, teclados, monitores y más",
  },
  {
    image:laptopImg,
    cardTitle: "Equipos desktop y portatiles.",
    cardDescription:
      "Cotice con nosotros la compra de sus equipos",
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
                  <Card 
                    cardImage={items.image}
                    cardTitle={items.cardTitle}
                    cardDescription={items.cardDescription}
                  />
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