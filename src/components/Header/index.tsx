import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

interface IHeader {
  children: ReactNode;
}

const Header = ({ children }: IHeader) => {
  return (
    <>
      <header className={styles.header}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink
              to="/pacient-register"
              className={styles.navLink}
              activeClassName={styles.navLinkSelected}
            >
              Cadastro de Pacientes
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to="/pacient-avaliation"
              className={styles.navLink}
              activeClassName={styles.navLinkSelected}
            >
              Ficha de Avaliação
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to="/pacient-medical-record"
              className={styles.navLink}
              activeClassName={styles.navLinkSelected}
            >
              Prontuário
            </NavLink>
          </li>
        </ul>
      </header>
      {children}
    </>
  );
};

export default Header;
