

import { useEffect } from "react";


interface ErrorToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number; 
}

const ErrorToast = ({
  message,
  isVisible,
  onClose,
  duration = 3000,
}: ErrorToastProps) => {
  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "16px",
        right: "16px",
        zIndex: 2000,
        backgroundColor: "#dc2626",
        color: "#ffffff",
        padding: "12px 16px",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        fontSize: "14px",
        maxWidth: "320px",
        lineHeight: "1.4",
      }}
    >
      {message}
    </div>
  );
};

export default ErrorToast;
