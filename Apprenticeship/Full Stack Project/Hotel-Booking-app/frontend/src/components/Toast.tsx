import { useEffect } from "react";
import "../styles/toast.css";

type ToastProps = {
  message: string;
  type: "SUCCESS" | "ERROR";
  onClose: () => void;
};

const Toast = ({ message, type, onClose }: ToastProps) => {
  const styles = type === "SUCCESS" ? "toast-type success" : "toast-type error";

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className={styles}>
      <div className="toast-wrapper">
        <span className="toast-message">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
