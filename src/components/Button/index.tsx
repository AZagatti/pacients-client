import { ButtonHTMLAttributes } from "react";

import styles from "./styles.module.css";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = ({ text, ...rest }: IButton) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} {...rest}>
        {text}
      </button>
    </div>
  );
};

export default Button;
