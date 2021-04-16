import { TextareaHTMLAttributes, forwardRef } from "react";

import styles from "./styles.module.css";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ id, label, error, ...rest }, ref) => {
    return (
      <div className={styles.input}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <textarea
          className={`${styles.inputElement} ${error ? styles.onError : ""}`}
          ref={ref}
          id={id}
          {...rest}
        />
        {error && <span className={styles.error}>Campo obrigatório.</span>}
      </div>
    );
  }
);

export default Textarea;
