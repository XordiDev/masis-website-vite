import React from "react";
import BgMediaSection, {
  type BgMediaSectionProps,
} from "../../components/BgMediaSection";
import Container from "../../components/Container";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { Subtitle, Title } from "../../components/Text";

type HeroProps = {
  title: string;
  button?: string;
  linkTo?: string;
  sectionId?: string;
  description?: string;
  bgMediaProps?: Omit<BgMediaSectionProps, "children">;
};

const Hero: React.FC<HeroProps> = ({
  title,
  button,
  linkTo,
  sectionId,
  description,
  bgMediaProps,
}) => {
  return (
    <BgMediaSection id={sectionId} {...bgMediaProps}>
      <Container flex="static" className="items-center justify-center">
        <Title color="white">{title}</Title>

        {description && (
          <div className="max-w-3xl">
            <Subtitle align="center" color="white">
              {description}
            </Subtitle>
          </div>
        )}

        {button && (
          <a href={linkTo ?? "#"}>
            <Button className="w-auto">{button}</Button>
          </a>
        )}
      </Container>
    </BgMediaSection>
  );
};

export default Hero;
