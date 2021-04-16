import React from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";

import styles from "./styles.module.css";

const modalRoot = document.getElementById("modal-root");

interface Props {
  isOpen: boolean;
  dismiss: () => void;
}

const Modal: React.FC<Props> = ({ children, isOpen, dismiss }) => {
  if (!modalRoot || !isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.card}>
        <button type="button" className={styles.closeButton} onClick={dismiss}>
          <FiX />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
