import React from "react";
import { Body, Subtitle } from "../Text";
import Button from "../Button";

type CardProps = {
  cardTitle?: string;
  cardDescription?: string | React.ReactNode;
  cardList?: string[];
  icon?: React.ReactNode;
  className?: string;
  button?: string | React.ReactNode;
};

const Card: React.FC<CardProps> = ({
  cardTitle,
  cardDescription,
  icon,
  cardList,
  className = "",
  button,
}) => {
  const showList = Array.isArray(cardList) && cardList.length > 0;

  return (
    <div
      className={
        "flex flex-col rounded-4xl bg-white p-6 text-black border h-full " +
        className
      }
    >
      {/* Contenido principal */}
      <div className="flex-1 flex flex-col items-center w-full">
        {/* Icono */}
        <div className="mb-4 flex justify-center text-4xl">{icon}</div>

        {/* Título */}
        {cardTitle && (
          <Subtitle className="mb-3 text-center">{cardTitle}</Subtitle>
        )}

        {/* Lista o descripción */}
        <div className="flex-1 w-full">
          {showList ? (
            <ul className="list-disc text-left pl-5 space-y-2">
              {cardList!.map((item, i) => (
                <li key={i}>
                  <Body>{item}</Body>
                </li>
              ))}
            </ul>
          ) : (
            cardDescription && (
              <Body className="text-left">{cardDescription}</Body>
            )
          )}
        </div>
      </div>

      {/* Botón siempre pegado abajo */}
      {button && (
        <div className="mt-6 flex justify-center">
          <a href="#services">
            <Button className="bg-red-500">{button}</Button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Card;
