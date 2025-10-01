import React from "react";
import Card from "../../components/Card";
import { Binoculars, Bird, Sparkle } from "lucide-react";
import Section from "../../components/Section";
import Container from "../../components/Container";
import { Subtitle, Title } from "../../components/Text";

const items = [
  {
    icon: <Sparkle />,
    cardTitle: "Seguridad de la Información",
    cardList: [
      "Evaluación de riesgos y vulnerabilidades",
      "Implementación de políticas de seguridad",
      "Capacitación en ciberseguridad para empleados",
    ],
  },
  {
    icon: <Bird />,
    cardTitle: "MISIÓN",
    cardDescription:
      "MASIS S.A.S. es una empresa vallecaucana, dedicada a la comercialización de servicios y productos para el procesamiento de la información, ofreciendo soluciones que satisfacen las necesidades de nuestros clientes y aumentan su productividad, buscando el bienestar de nuestros colaboradores, socios y la comunidad, generando empleo y protegiendo a la madre naturaleza.",
  },
  {
    icon: <Binoculars />,
    cardTitle: "VISIÓN",
    cardDescription:
      "Ser en el 2.026 una empresa líder EN EL VALLE DEL CAUCA en el soporte integral a micro, pequeñas y medianas empresas; reconocida en el mercado por el alto nivel profesional de su gente, la productividad de su organización, la calidad de sus servicios y productos y la investigación permanente de nuevas tecnologías y servicios.",
  },
  {
    icon: <Binoculars />,
    cardTitle: "POLÍTICAS",
    cardDescription: "En respuesta a los desafíos de la globalización, MASIS S.A.S busca el mejoramiento continuo, entrenamiento y motivación de su gente; optimizar su productividad para ser competitivos y lograr la consolidación en el mercado",
  },
];

type CardSectionProps = {
  title?: string;
  description?: string;
  sectionId?: string;
};

const CardSection: React.FC<CardSectionProps> = ({
  title,
  description,
  sectionId,
}) => {
  return (
    <Section>
      <Container flex="static">
        <div className="text-center" id={sectionId}>
          <Title>{title}</Title>
        </div>
        <Subtitle>{description}</Subtitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
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
