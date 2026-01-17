

import { ReactNode } from "react";



type ButtonVariant = "primary" | "secondary" | "danger";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
  },
  secondary: {
    backgroundColor: "#e5e7eb",
    color: "#111827",
  },
  danger: {
    backgroundColor: "#dc2626",
    color: "#ffffff",
  },
};

const Button = ({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "8px 14px",
        borderRadius: "8px",
        border: "none",
        fontSize: "14px",
        fontWeight: 500,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        transition: "all 0.2s ease",
        boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
        ...variantStyles[variant],
      }}
    >
      {children}
    </button>
  );
};

export default Button;
