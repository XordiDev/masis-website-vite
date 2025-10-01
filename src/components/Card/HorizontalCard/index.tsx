import React from "react";
import { Body, Subtitle } from "../../Text";

interface HorizontalCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div>
        <Subtitle variant="h3" align="left">{title}</Subtitle>
        <Body>{description}</Body>
      </div>
    </div>
  );
};

export default HorizontalCard;
