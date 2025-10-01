import React from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type VariantProps =
  | "primary"
  | "secondary"
  | "outline"
  | "danger"
  | "success"
  | "white-outline";

type SizeProps = "sm" | "md" | "lg";

type RoundedProps = "sm" | "md" | "lg" | "xl" | "full";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  label?: string;
  size?: SizeProps;
  rounded?: RoundedProps;
  className?: string;
  fullWidth?: boolean;
  variant?: VariantProps;
}

const getVariantClasses = (variant: VariantProps): string => {
  const variants: Record<VariantProps, string> = {
    primary: "bg-red-500 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    outline:
      "border-2 border-primary dark:text-white hover:bg-primary-500 dark:hover:bg-accent-500 dark:hover:text-white hover:text-white",
    danger: "bg-primary-600 hover:bg-primary-700 text-white",
    success: "bg-green-600 hover:bg-green-700 text-white",
    "white-outline": "border-2 border-white text-white",
  };
  return variants[variant] || variants.primary;
};

const getSizeClasses = (size: SizeProps): string => {
  const sizes: Record<SizeProps, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  return sizes[size] || sizes.md;
};

const getButtonRoundedClasses = (rounded: RoundedProps): string => {
  const roundeds: Record<RoundedProps, string> = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };
  return roundeds[rounded] || roundeds.md;
};

const Button: React.FC<ButtonProps> = ({
  children,
  label = "",
  size = "md",
  rounded = "md",
  className = "",
  type = "button",
  disabled = false,
  fullWidth = false,
  onClick = () => {},
  variant = "primary",
  ...props
}) => {
  const classNames = [
    "cursor-pointer rounded-xl font-semibold text-nowrap transition hover:scale-105 disabled:opacity-60 truncate",
    getVariantClasses(variant),
    getSizeClasses(size),
    getButtonRoundedClasses(rounded),
    fullWidth ? "w-full" : "w-auto",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={label}
      disabled={disabled}
      className={classNames}
      {...props}
    >
      {children || label}
    </button>
  );
};

export default Button;
