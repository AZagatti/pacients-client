import Modal from "../../Modal";

import styles from "./styles.module.css";

interface ConfirmModalProps {
  isOpen: boolean;
  onDismiss: () => void;
  onConfirm: () => void;
  deleteResult: { success: boolean; error: boolean };
}

const Confirm = ({
  isOpen,
  deleteResult,
  onDismiss,
  onConfirm,
}: ConfirmModalProps) => {
  const { success, error } = deleteResult;

  return (
    <Modal isOpen={isOpen} dismiss={onDismiss}>
      <div className={styles.card}>
        {success && <span className={styles.success}>Sucesso ao deletar paciente.</span>}
        {error && <span className={styles.error}>Erro ao deletar paciente.</span>}
        <p>Deseja realmente excluir o paciente?</p>
        <div className={styles.buttons}>
          <button type="button" onClick={onConfirm} className={styles.yes}>
            Sim
          </button>
          <button type="button" onClick={onDismiss} className={styles.no}>
            Não
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Confirm;
