import React from "react";
import HorizontalCard from "../../components/Card/HorizontalCard/index";
import Section from "../../components/Section";
import Container from "../../components/Container";
import { Body, Title } from "../../components/Text";

interface CardData {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface AboutSectionProps {
  image: string;
  title: string;
  description: string;
  cards: CardData[];
}

const AboutSection: React.FC<AboutSectionProps> = ({
  image,
  title,
  description,
  cards,
}) => {
  return (
    <Section>
      <Container flex="static">
        <div>
          <Title className="mb-4">{title}</Title>
          <Body className="mb-4">{description}</Body>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Imagen */}
          <div className="w-full h-full">
            <img
              src={image}
              alt={title}
              className="rounded-xl object-cover w-full h-full"
            />
          </div>

          {/* Texto + Cards */}
          <div>
            <div className="space-y-6">
              {cards.map((card, index) => (
                <HorizontalCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutSection;
