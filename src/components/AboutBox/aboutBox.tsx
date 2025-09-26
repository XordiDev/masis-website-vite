import { Card } from '../Card/card';
import { IconTitleText } from '../IconTitleText/iconTitleText';
import { Star, Smartphone, Database, Palette } from 'lucide-react';

export function AboutBox() {
  return (
    <div id="aboutBox" className='items-stretch flex flex-wrap gap-[0.5rem] justify-between'>
      <Card >
        <div className=''>
            <IconTitleText
          title="Diseño Web"
          text="Sitios modernos y responsive"
          icon={<Star className="w-6 h-6 text-blue-500" />}
          iconPosition='top'
        />
        <IconTitleText
          title="Seguridad"
          text="Protección avanzada"
          icon={<Smartphone className="w-6 h-6 text-green-500" />}
          iconPosition='top'
        />
        <IconTitleText
          title="Rapidez"
          text="Optimización total"
          icon={<Database className="w-6 h-6 text-yellow-500" />}
          iconPosition='top'
        />
        </div>
        
      </Card>
    </div>
  );
}