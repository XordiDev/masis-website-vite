import BgMediaSection, { type BgMediaSectionProps } from "../BgMediaSection";
import Button from "../Button";

type HeroProps = {
  bgMediaProps: Omit<BgMediaSectionProps, "children">;
};

const Hero: React.FC<HeroProps> = ({ bgMediaProps }) => {
  return (
    <BgMediaSection {...bgMediaProps}>
      <div className="flex flex-col items-center py-0 lg:py-10 px-5 md:px-10 gap-y-8 gap-x-15 w-3xl">
        <h1 className="text-center text-white lg:text-5xl md:text-3xl text-4xl">MASIS SAS</h1>
        <p className="text-center text-white text-2xl lg:text-3xl md:text-2xl">
          Nos especializamos en soluciones para la protección de la información
          de su empresa, enfocado a PYMES en el Valle del Cauca
        </p>
        <Button button="Leer más"/>
      </div>
    </BgMediaSection>
  );
};

export default Hero;
