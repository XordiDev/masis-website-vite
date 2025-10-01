import React from "react";
import type { HTMLAttributes, JSX, ReactNode, ElementType } from "react";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "caption"
  | "overline"
  | "link";

type Weight = "light" | "normal" | "medium" | "semibold" | "bold";

type Align = "left" | "center" | "right" | "justify";

type Color =
  | "inherit"
  | "primary"
  | "secondary"
  | "accent"
  | "white"
  | "black"
  | "gray"
  | "inverted";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  align?: Align;
  variant?: Variant;
  color?: Color;
  weight?: Weight;
}

const getVariantClasses = (variant: Variant): string => {
  const variants: Record<Variant, string> = {
    h1: "text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-tight tracking-tight",
    h2: "text-[clamp(1.25rem,2.5vw,2rem)] font-semibold leading-snug",
    h3: "text-[clamp(1.125rem,2vw,1.5rem)] font-semibold leading-snug",
    h4: "text-[clamp(1rem,1.5vw,1.25rem)] font-medium leading-snug",
    h5: "text-[clamp(0.95rem,1vw,1.1rem)] font-medium leading-snug",
    h6: "text-[clamp(0.9rem,0.75vw,1rem)] font-medium leading-normal",
    body1: "text-[clamp(1.2rem,0.95vw,1.5rem)] leading-relaxed",
    body2: "text-[clamp(1rem,0.85vw,1.125rem)] leading-relaxed",
    caption: "text-[clamp(0.7rem,0.4vw,0.8rem)] leading-normal text-gray-500",
    overline:
      "text-[clamp(0.7rem,0.4vw,0.8rem)] leading-tight uppercase tracking-widest",
    link: "text-[clamp(0.9rem,0.75vw,1rem)] hover:underline text-primary cursor-pointer",
  };
  return variants[variant] || variants.body1;
};

const getWeightClasses = (weight: Weight): string => {
  const weights: Record<Weight, string> = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };
  return weights[weight] || weights.normal;
};

const getAlignClasses = (align: Align): string => {
  const alignments: Record<Align, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };
  return alignments[align] || alignments.left;
};

const getColorClasses = (color: Color): string => {
  const colors: Record<Color, string> = {
    inherit: "text-inherit",
    primary: "text-primary-500 dark:text-accent-500",
    secondary: "text-secondary-500",
    accent: "text-primary-900 dark:text-accent-500",
    white: "text-white",
    black: "text-black",
    gray: "text-gray-500",
    inverted: "text-inverted",
  };
  return colors[color] || colors.inherit;
};

const TAG_MAP: Record<Variant, keyof JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
  body2: "p",
  caption: "span",
  overline: "span",
  link: "a",
};

const Text: React.FC<TextProps> = ({
  children,
  className = "",
  align = "left",
  variant = "body1",
  color = "",
  weight = "normal",
  ...props
}) => {
  const Component: ElementType = TAG_MAP[variant] || "p";

  const classes = [
    getVariantClasses(variant),
    getWeightClasses(weight),
    getAlignClasses(align),
    getColorClasses(color),
    className,
  ].join(" ");

  return (
    <Component className={classes} {...(props as HTMLAttributes<HTMLElement>)}>
      {children}
    </Component>
  );
};

export interface BasicProps extends Omit<TextProps, "variant"> {
  children: ReactNode;
}

export const Title: React.FC<BasicProps> = ({ children, ...props }) => (
  <Text variant="h1" weight="bold" color="primary" align="center" {...props}>
    {children}
  </Text>
);
export const Subtitle: React.FC<BasicProps> = ({ children, ...props }) => (
  <Text variant="h4" weight="semibold" align="center" {...props}>
    {children}
  </Text>
);
export const Body: React.FC<BasicProps> = ({
  children,
  className = "",
  align = "justify",
  ...props
}) => (
  <Text
    variant="body1"
    weight="normal"
    align={align}
    className={className}
    {...props}
  >
    {children}
  </Text>
);
export const Caption: React.FC<BasicProps> = ({ children, ...props }) => (
  <Text variant="caption" weight="normal" {...props}>
    {children}
  </Text>
);
export const Overline: React.FC<BasicProps> = ({ children, ...props }) => (
  <Text variant="overline" weight="normal" {...props}>
    {children}
  </Text>
);

export default Text;
