import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Button from "../../../../components/Button";
import Textarea from "../../../../components/Textarea";

import styles from "./styles.module.css";

import Layout from "../../../../components/Layout";
import Modal from "../../../Modal";
import {
  createMedicalRecordRepository,
  IMedicalRecord,
} from "../../../../repositories/medicalRecord";

interface AddMedicalRecordModalProps {
  pacient_id: number;
  isOpen: boolean;
  dismiss: () => void;
}

const AddMedicalRecordModal = ({ pacient_id, isOpen, dismiss }: AddMedicalRecordModalProps) => {
  const [result, setResult] = useState<"success" | "error" | undefined>();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IMedicalRecord>();
  const onSubmit = async (data: IMedicalRecord) => {
    try {
      setLoading(true);
      await createMedicalRecordRepository({ medicalRecord: data, pacient_id });
      setResult("success");
    } catch (err) {
      setResult("error");
    } finally {
      window.scrollTo(0, 0);
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setResult(undefined);
    }, 4000);
  }, [result]);

  return (
    <Modal isOpen={isOpen} dismiss={dismiss}>
      <Layout
        messages={{
          success: "Sucesso em adicionar o prontuário.",
          error: "Erro em adicionar o prontuário.",
        }}
        result={result}
        title="Adição de Prontuários"
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

export default AddMedicalRecordModal;
