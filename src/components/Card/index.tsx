import React from "react";

type CardProps = {
  cardTitle?: string;
  cardDescription?: string;
  icon?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ cardTitle, cardDescription, icon }) => {
  return (
    <div className="flex flex-col items-center justify-between rounded-4xl bg-white p-6 text-black border h-full">
      <div className="mb-4 flex justify-center text-4xl">{icon}</div>

      <h3 className="mb-4 text-center font-semibold text-[clamp(1.125rem,2vw,1.5rem)]">
        {cardTitle}
      </h3>

      <p className="text-justify ">{cardDescription}</p>
    </div>
  );
};

export default Card;
