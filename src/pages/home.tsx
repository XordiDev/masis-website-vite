import Hero from "../components/Hero";
import Banner from "../assets/banner-img.png";
import CardSection from "../sections/CardSection";

const Home = () => {
  return (
    <div id="home-page">
      <Hero
        bgMediaProps={{
          media: Banner,
        }}
      />
      <CardSection
        title="Nuestros Servicios"
        description="Ofrecemos una gama completa de servicios de consultoría y soluciones tecnológicas para impulsar la transformación digital de su empresa."
      />

    </div>
  );
};

export default Home;
