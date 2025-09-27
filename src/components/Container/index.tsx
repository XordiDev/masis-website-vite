import React from "react";
import { cva } from "class-variance-authority";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  flex?: "static" | "dynamic" | "dynamic-reverse" | "dynamic-reverse-mobile";
  padding?: "none" | "default" | "sm" | "lg";
  spacing?: "none" | "default" | "sm" | "lg";
};

const containerVariants = cva("container mx-auto", {
  variants: {
    flex: {
      static: "flex flex-col",
      dynamic: "flex flex-col lg:flex-row",
      "dynamic-mobile": "flex flex-col-reverse lg:flex-row",
      "dynamic-reverse": "flex flex-col lg:flex-row-reverse",
      "dynamic-reverse-mobile": "flex flex-col-reverse lg:flex-row-reverse",
    },
    padding: {
      none: "",
      default: "py-0 lg:py-10 px-5 md:px-10",
      sm: "py-6 px-3 lg:px-6",
      lg: "py-16 px-6 lg:px-16",
    },
    spacing: {
      none: "",
      default: "gap-y-8 gap-x-15",
      sm: "gap-y-4 gap-x-8",
      lg: "gap-y-12 gap-x-20",
    },
  },
  defaultVariants: {
    flex: "dynamic",
    padding: "default",
    spacing: "default",
  },
});

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  flex,
  padding,
  spacing,
}) => {
  return (
    <div className={containerVariants({ flex, padding, spacing, className })}>
      {children}
    </div>
  );
};

export default Container;
