// IconTitleText.tsx
interface IconTitleTextProps {
  title: string;
  text: string;
  icon: React.ReactNode; // Cualquier elemento React (lo más flexible)
  iconPosition?: 'left' | 'right' | 'top' | 'bottom';
  titleSize?: string;
  textSize?: string;
}

export function IconTitleText({
  title,
  text,
  icon,
  iconPosition = 'left',
  titleSize = 'text-xl',
  textSize = 'text-base'
}: IconTitleTextProps) {
  
  const layouts = {
    left: (
      <div className="flex items-start gap-3">
        <div className="m-auto">
          {icon}
        </div>
        <div>
          <h3 className={`font-bold ${titleSize}`}>{title}</h3>
          <p className={textSize}>{text}</p>
        </div>
      </div>
    ),
    right: (
      <div className="flex items-start gap-3">
        <div>
          <h3 className={`font-bold ${titleSize}`}>{title}</h3>
          <p className={textSize}>{text}</p>
        </div>
        <div className="m-auto">
          {icon}
        </div>
      </div>
    ),
    top: (
      <div className="text-center ">
        <div className="m-auto">
          {icon}
        </div>
        <h3 className={`font-bold ${titleSize} mt-2`}>{title}</h3>
        <p className={textSize}>{text}</p>
      </div>
    ),
    bottom: (
      <div className="text-center">
        <h3 className={`font-bold ${titleSize}`}>{title}</h3>
        <p className={`${textSize} mb-2`}>{text}</p>
        <div className="m-auto">
          {icon}
        </div>
      </div>
    )
  };

  return layouts[iconPosition];
}