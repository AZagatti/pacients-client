import { useEffect, useState } from "react";
import AddMedicalRecordModal from "../../components/modals/medical-record/AddMedicalRecordModal";
import EditMedicalRecordModal from "../../components/modals/medical-record/EditMedicalRecordModal";

import Layout from "../../components/Layout";
import PaginatedSelectPacients from "../../components/PaginatedSelectPacients";
import {
  IMedicalRecord,
  showMedicalRecordRepository,
} from "../../repositories/medicalRecord";
import { Pacient } from "../../repositories/pacient";

import styles from "./styles.module.css";

const MedicalRecord = () => {
  const [result, setResult] = useState<"success" | "error" | undefined>();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [medicalRecords, setMedicalRecords] = useState<IMedicalRecord[]>([]);
  const [pacient, setPacient] = useState<Pacient>();
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [medicalRecordSelected, setMedicalRecordSelected] = useState<
    IMedicalRecord | undefined
  >();

  useEffect(() => {
    (async () => {
      try {
        if (!pacient?.id) return;
        const data = await showMedicalRecordRepository({
          page,
          pacient_id: pacient.id,
        });
        setPage(data.meta.current_page);
        setLastPage(data.meta.last_page);
        setMedicalRecords(data.data);
      } catch (err) {
        setMedicalRecords([]);
        setResult("error");
      }
    })();
  }, [page, lastPage, pacient?.id, medicalRecordSelected, isAddModalOpen]);

  useEffect(() => {
    setTimeout(() => {
      setResult(undefined);
    }, 4000);
  }, [result]);

  const handleOpenEdit = (selectedMedicalRecord: IMedicalRecord) => {
    setMedicalRecordSelected(selectedMedicalRecord);
  };

  const previousPage = () => {
    setPage((state) => state - 1);
  };

  const nextPage = () => {
    setPage((state) => state + 1);
  };

  const handleOpenAddModal = () => {
    if (!pacient?.id) {
      alert("Selecione um paciente.");
      return;
    }
    setIsAddModalOpen(true);
  };

  const getMessages = () => {
    return {
      error: "Erro ao buscar os atendimentos",
      success: "Sucesso ao buscar atendimentos.",
    };
  };

  return (
    <>
      <Layout
        messages={getMessages()}
        result={result}
        title="Prontuário Médico"
      >
        <PaginatedSelectPacients value={pacient} onChange={setPacient} />

        <div className={styles.tableDiv}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Procedimentos</th>
                <th>Data do atendimento</th>
                <th>Alteração do atendimento</th>
                <th>
                  <button
                    type="button"
                    className={styles.button}
                    onClick={handleOpenAddModal}
                  >
                    +
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {medicalRecords.map((medicalRecord) => (
                <tr key={medicalRecord.id}>
                  <td>{medicalRecord.id}</td>
                  <td>{medicalRecord.procedures}</td>
                  <td>
                    {new Date(medicalRecord.created_at).toLocaleString("pt-BR")}
                  </td>
                  <td>
                    {new Date(medicalRecord.updated_at).toLocaleString("pt-BR")}
                  </td>
                  <td>
                    <button
                      type="button"
                      className={styles.button}
                      onClick={() => handleOpenEdit(medicalRecord)}
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {medicalRecords.length === 0 && (
            <div className={styles.notFound}>
              <h2 className={styles.h1}>Nenhum atendimento encontrado</h2>
            </div>
          )}
          <div className={styles.pagination}>
            <button
              type="button"
              onClick={previousPage}
              className={styles.paginationButton}
              disabled={page === 1}
            >
              &lt;
            </button>
            <button
              type="button"
              onClick={nextPage}
              className={styles.paginationButton}
              disabled={page === lastPage}
            >
              &gt;
            </button>
          </div>
        </div>
      </Layout>
      <EditMedicalRecordModal
        medicalRecord={medicalRecordSelected}
        dismiss={() => setMedicalRecordSelected(undefined)}
        isOpen={!!medicalRecordSelected}
      />
      {pacient?.id && (
        <AddMedicalRecordModal
          pacient_id={pacient.id}
          dismiss={() => setIsAddModalOpen(false)}
          isOpen={isAddModalOpen}
        />
      )}
    </>
  );
};

export default MedicalRecord;
