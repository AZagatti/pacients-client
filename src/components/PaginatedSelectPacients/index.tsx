import { Dispatch, SetStateAction, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { FiEdit, FiTrash2 } from "react-icons/fi";

import {
  deletePacientRepository,
  Pacient,
  showPacientsRepository,
} from "../../repositories/pacient";

import styles from "./styles.module.css";
import ConfirmModal from "../modals/ConfirmModal";
import EditPacientModal from "../modals/pacient/EditPacientModal";

interface PaginatedSelectPacientsProps {
  placeholder: string;
  value?: Pacient;
  onChange: Dispatch<SetStateAction<Pacient | undefined>>;
}

const loadPageOptions = async (
  q: string,
  _: any,
  { page }: { page: number }
) => {
  const data = await showPacientsRepository(page);
  const hasMore = data.meta.last_page !== data.meta.current_page;
  const options = data.data
    .map((pacient) => ({
      ...pacient,
      value: pacient.id,
      label: pacient.name,
    }))
    .filter(({ label }) => label.toLowerCase().includes(q.toLowerCase()));

  return {
    options,
    hasMore: q ? false : hasMore,

    additional: {
      page: page + 1,
    },
  };
};

const initialResult = { success: false, error: false };

const PaginatedSelectPacients = ({
  placeholder,
  value,
  onChange,
}: PaginatedSelectPacientsProps) => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [deleteResult, setDeleteResult] = useState(initialResult);

  const onDismiss = () => setIsConfirmModalOpen(false);

  const handleDeletePacient = async () => {
    try {
      if (!value) return;

      await deletePacientRepository(value.id);
      setDeleteResult((state) => ({ ...state, success: true }));
      onChange(undefined);
    } catch (err) {
      setDeleteResult((state) => ({ ...state, error: true }));
    } finally {
      handleResetResult();
    }
  };

  const handleResetResult = () => {
    setTimeout(() => {
      setDeleteResult(initialResult);
      onDismiss();
    }, 3000);
  };

  return (
    <>
      <div className={styles.selectWrapperContainer}>
        {value && (
          <>
            <button
              className={styles.add}
              onClick={() => setIsEditModalOpen(true)}
              type="button"
            >
              <FiEdit />
            </button>
            <button
              className={styles.delete}
              onClick={() => setIsConfirmModalOpen(true)}
              type="button"
            >
              <FiTrash2 />
            </button>
          </>
        )}
        <AsyncPaginate
          className={styles.selectWrapper}
          debounceTimeout={300}
          onChange={onChange}
          additional={{ page: 1 }}
          value={value}
          loadOptions={loadPageOptions}
          cacheUniqs={[isConfirmModalOpen]}
          placeholder={placeholder}
          noOptionsMessage={() => "Nenhum paciente"}
          loadingMessage={() => "Carregando pacientes..."}
        />
        <input
          className={styles.inputRequired}
          type="text"
          value={value ? JSON.stringify(value) : ""}
          tabIndex={-1}
          onChange={() => {}}
          autoComplete="off"
          required
        />
      </div>
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onDismiss={onDismiss}
        onConfirm={handleDeletePacient}
        deleteResult={deleteResult}
      />
      {value && (
        <EditPacientModal
          isOpen={isEditModalOpen}
          dismiss={() => setIsEditModalOpen(false)}
          pacient={value}
        />
      )}
    </>
  );
};

export default PaginatedSelectPacients;
