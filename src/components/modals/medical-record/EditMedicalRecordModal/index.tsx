import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Button from "../../../../components/Button";

import styles from "./styles.module.css";

import Layout from "../../../../components/Layout";
import Modal from "../../../Modal";
import {
  IMedicalRecord,
  updateMedicalRecordRepository,
} from "../../../../repositories/medicalRecord";
import Textarea from "../../../Textarea";

interface EditMedicalRecordModalProps {
  medicalRecord: IMedicalRecord | undefined;
  isOpen: boolean;
  dismiss: () => void;
}

const EditMedicalRecordModal = ({ medicalRecord, isOpen, dismiss }: EditMedicalRecordModalProps) => {
  const [result, setResult] = useState<"success" | "error" | undefined>();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IMedicalRecord>();
  const onSubmit = async (data: IMedicalRecord) => {
    try {
      setLoading(true);
      await updateMedicalRecordRepository({
        ...medicalRecord,
        ...data,
      });
      setResult("success");
    } catch (err) {
      setResult("error");
    } finally {
      window.scrollTo(0, 0);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && medicalRecord?.procedures) {
      setValue("procedures", medicalRecord.procedures);
    }
  }, [isOpen, medicalRecord?.procedures, setValue]);

  useEffect(() => {
    setTimeout(() => {
      setResult(undefined);
    }, 4000);
  }, [result]);

  return (
    <Modal isOpen={isOpen} dismiss={dismiss}>
      <Layout
        messages={{
          success: "Sucesso em editar o prontuário.",
          error: "Erro em editar o prontuário.",
        }}
        result={result}
        title="Edição de Prontuários"
      >
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Textarea
            label="Procedimentos"
            id="procedures"
            error={!!errors?.procedures}
            {...register("procedures", { required: true })}
          />
          <Button disabled={loading} type="submit" text="Salvar" />
        </form>
      </Layout>
    </Modal>
  );
};

export default EditMedicalRecordModal;
