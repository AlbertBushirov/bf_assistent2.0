import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./modal.scss";

export function Modal({ children }) {
  const navigate = useNavigate();
  const close = () => navigate(-1);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      className="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={close}
    >
      <button
        className="close-btn"
        onClick={(e) => {
          e.stopPropagation();
          close();
        }}
      >
        X
      </button>

      <motion.div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", duration: 0.4, bounce: 0.3 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
