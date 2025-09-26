import TitleText from '../TitleText/titleText';

function TitleHeading() {
  return (
    <div className='py-[1rem] px-[4rem] text-center'>
      <TitleText 
        title="¿Quiénes somos?" 
        text="Desde 1998, MASIS ha sido una solución confiable y efectiva para las necesidades del área de TI en el segmento MIPYMES. 
        Ofrecemos servicios de alta calidad, respaldados por un proceso continuo de mejora en nuestras metodologías, y un balance óptimo entre costo y beneficio en soporte técnico." 
        titleSize="text-5xl/14 pb-[0.3rem]"
        textSize="text-xl/8"
      />
    </div>
  );
}

export default TitleHeading;