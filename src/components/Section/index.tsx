import React from "react";
import { cva } from "class-variance-authority";

export type SectionProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "normal" | "banner" | "card" | "feature" | "cta";
  bgColor?:
    | "none"
    | "white"
    | "gray"
    | "gray-dark"
    | "primary"
    | "primary-light"
    | "primary-gradient"
    | "secondary"
    | "secondary-light"
    | "success"
    | "success-light"
    | "warning"
    | "warning-light"
    | "danger"
    | "danger-light"
    | "dark"
    | "brand-gradient"
    | "hero-gradient";
  spacing?: "none" | "sm" | "default" | "lg" | "xl";
  height?: "auto" | "screen" | "1/2" | "3/4";
  centered?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const sectionVariants = cva("w-full snap-center scroll-mt-16", {
  variants: {
    variant: {
      normal: "",
      banner: "relative overflow-hidden",
      card: "bg-white rounded-lg shadow-sm border",
      feature: "bg-gray-50",
      cta: "text-white",
    },
    bgColor: {
      none: "",
      white: "bg-white",
      gray: "bg-gray-50",
      "gray-dark": "bg-gray-100",
      primary: "bg-primary-500 text-white dark:bg-accent-500",
      "primary-light": "bg-primary-50",
      "primary-gradient":
        "bg-gradient-to-r from-primary-600 to-purple-600 text-white",
      secondary: "bg-purple-600 text-white",
      "secondary-light": "bg-purple-50",
      success: "bg-green-600 text-white",
      "success-light": "bg-green-50",
      warning: "bg-yellow-500 text-white",
      "warning-light": "bg-yellow-50",
      danger: "bg-red-600 text-white",
      "danger-light": "bg-red-50",
      dark: "bg-gray-900 text-white",
      "brand-gradient":
        "bg-gradient-to-br from-primary-600 via-accent-600 to-primary-600 text-white dark:from-primary-800 dark:via-accent-500 dark:to-primary-800",
      "hero-gradient":
        "bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white",
    },
    spacing: {
      none: "py-0",
      sm: "py-4 md:py-8",
      default: "py-10 md:py-16",
      lg: "py-8 md:py-24",
      xl: "py-16 md:py-32",
    },
    height: {
      auto: "",
      screen: "min-h-screen",
      "1/2": "min-h-[50vh]",
      "3/4": "min-h-[75vh]",
    },
    centered: {
      true: "flex items-center justify-center",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "banner",
      height: "screen",
      centered: true,
      class: "text-center",
    },

    {
      variant: "cta",
      centered: true,
      class: "text-center",
    },

    {
      variant: "feature",
      spacing: "lg",
      class: "border-t border-b border-gray-200",
    },

    {
      variant: "card",
      spacing: ["sm", "default"],
      class: "mx-4 md:mx-8",
    },

    {
      bgColor: ["primary-gradient", "brand-gradient", "hero-gradient"],
      centered: true,
      class: "text-center",
    },

    {
      bgColor: ["dark", "primary", "secondary", "danger"],
      class: "backdrop-blur-sm",
    },
  ],
  defaultVariants: {
    variant: "normal",
    bgColor: "none",
    spacing: "default",
    height: "auto",
    centered: false,
  },
});

const Section: React.FC<SectionProps> = ({
  children,
  className,
  variant,
  bgColor,
  spacing,
  height,
  centered,
  ...props
}) => {
  return (
    <section
      className={sectionVariants({
        variant,
        bgColor,
        spacing,
        height,
        centered,
        className,
      })}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
