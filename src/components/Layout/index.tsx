import { ReactNode } from "react";
import styles from "./styles.module.css";

interface ILayout {
  result: undefined | "success" | "error";
  title: string;
  children: ReactNode;
  messages?: { success: string; error: string };
}

const Layout = ({ result, title, messages, children }: ILayout) => {
  const renderResult =
    result === "success" ? (
      <div className={styles.success}>
        <p>
          {messages?.success
            ? messages.success
            : "Cadastro realizado com sucesso."}
        </p>
      </div>
    ) : (
      <div className={styles.error}>
        <p>
          {messages?.error ? messages.error : "Falha ao realizar cadastro."}
        </p>
      </div>
    );

  return (
    <main className={styles.container}>
      {result && renderResult}

      <h1 className={styles.title}>{title}</h1>
      {children}
    </main>
  );
};

export default Layout;
