interface TitleTextProps {
  title: string;
  text: string;
  titleSize?: string;
  textSize?: string;
}

function TitleText({ 
  title, 
  text, 
  titleSize = "text-2xl",
  textSize = "text-base"
}: TitleTextProps) {
  return (
    <div>
      <h2 className={`font-bold ${titleSize} mb-2`}>{title}</h2>
      <p className={textSize}>{text}</p>
    </div>
  );
}

export default TitleText;