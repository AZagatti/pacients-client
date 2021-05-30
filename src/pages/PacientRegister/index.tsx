import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Button from "../../components/Button";
import Input from "../../components/Input";
import {
  createPacientRepository,
  Pacient,
  updatePacientRepository,
} from "../../repositories/pacient";

import styles from "./styles.module.css";

import Layout from "../../components/Layout";
import PaginatedSelectPacients from "../../components/PaginatedSelectPacients";

const PacientRegister = () => {
  const [result, setResult] = useState<"success" | "error" | undefined>();
  const [loading, setLoading] = useState(false);

  const [pacient, setPacient] = useState<Pacient>();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Pacient>();
  const onSubmit = async (data: Pacient) => {
    try {
      setLoading(true);
      if (pacient) {
        await updatePacientRepository(data);
      } else {
        await createPacientRepository(data);
      }
      reset();
      setResult("success");
    } catch (err) {
      setResult("error");
    } finally {
      window.scrollTo(0, 0);
      setLoading(false);
    }
  };

  useEffect(() => {
    (() => {
      if (!pacient) return reset();

      for (const objK in pacient) {
        const key = objK as keyof Pacient;
        setValue(key, pacient[key]);
      }
    })();
  }, [pacient, setValue, reset, result]);

  useEffect(() => {
    setTimeout(() => {
      setResult(undefined);
    }, 4000);
  }, [result]);

  return (
    <Layout
      result={result}
      messages={{
        success: pacient
          ? "Atualização do paciente realizada com sucesso"
          : "Cadastro do paciente realizado com sucesso",
        error: pacient
          ? "Erro ao atualizar usuário"
          : "Erro ao cadastrar usuário",
      }}
      title="Pacientes"
    >
      <PaginatedSelectPacients
        placeholder="Escolha um paciente para atualizar seus dados..."
        value={pacient}
        onChange={setPacient}
      />

      <h2 className={styles.h2}>
        {pacient ? "Atualizar paciente" : "Cadastrar paciente"}
      </h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          label="Nome"
          id="name"
          error={!!errors?.name}
          {...register("name", { required: true })}
        />
        <Input
          type="text"
          label="Data de nascimento"
          id="birthday"
          error={!!errors?.birthday}
          {...register("birthday", { required: true })}
        />
        <Input
          type="text"
          label="Sexo"
          id="gender"
          error={!!errors?.gender}
          {...register("gender", { required: true })}
        />
        <Input
          type="number"
          label="Peso (kg)"
          id="weight"
          error={!!errors?.weight}
          {...register("weight", { required: true })}
        />
        <Input
          type="number"
          label="Altura (cm)"
          id="height"
          error={!!errors?.height}
          {...register("height", { required: true })}
        />
        <Input
          type="text"
          label="Cor (branco, pardo ou negro)"
          id="ethnicity"
          error={!!errors?.ethnicity}
          {...register("ethnicity", { required: true })}
        />
        <Input
          type="text"
          label="Escolaridade"
          id="schooling"
          error={!!errors?.schooling}
          {...register("schooling", { required: true })}
        />
        <Input
          type="text"
          label="Profissão"
          id="occupation"
          error={!!errors?.occupation}
          {...register("occupation", { required: true })}
        />
        <Input
          type="text"
          label="RG"
          id="rg"
          error={!!errors?.rg}
          {...register("rg", { required: true })}
        />
        <Input
          type="text"
          label="CPF"
          id="cpf"
          error={!!errors?.cpf}
          {...register("cpf", { required: true })}
        />
        <Input
          type="text"
          label="Estado Civil"
          id="marital_status"
          error={!!errors?.marital_status}
          {...register("marital_status", { required: true })}
        />
        <Input
          type="text"
          label="Naturalidade"
          id="nationality"
          error={!!errors?.nationality}
          {...register("nationality", { required: true })}
        />
        <Input
          type="text"
          label="Estado da Naturalidade"
          id="nationality_state"
          error={!!errors?.nationality_state}
          {...register("nationality_state", { required: true })}
        />
        <Input
          type="text"
          label="Pai"
          id="father"
          error={!!errors?.father}
          {...register("father", { required: true })}
        />
        <Input
          type="text"
          label="Naturalidade do Pai"
          id="father_nationality"
          error={!!errors?.father_nationality}
          {...register("father_nationality", { required: true })}
        />
        <Input
          type="text"
          label="Mãe"
          id="mother"
          error={!!errors?.mother}
          {...register("mother", { required: true })}
        />
        <Input
          type="text"
          label="Naturalidade da Mãe"
          id="mother_nationality"
          error={!!errors?.mother_nationality}
          {...register("mother_nationality", { required: true })}
        />
        <Input
          type="text"
          label="Contato"
          id="contact"
          error={!!errors?.contact}
          {...register("contact", { required: true })}
        />
        <Input
          type="text"
          label="Endereço"
          id="street"
          error={!!errors?.street}
          {...register("street", { required: true })}
        />
        <Input
          type="number"
          label="Nº"
          id="number"
          error={!!errors?.number}
          {...register("number", { required: true })}
        />
        <Input
          type="text"
          label="Complemento"
          id="add_on"
          error={!!errors?.add_on}
          {...register("add_on")}
        />
        <Input
          type="text"
          label="Bairro"
          id="district"
          error={!!errors?.district}
          {...register("district", { required: true })}
        />
        <Input
          type="text"
          label="CEP"
          id="city"
          error={!!errors?.city}
          {...register("city", { required: true })}
        />
        <Input
          type="text"
          label="Cidade"
          id="cep"
          error={!!errors?.cep}
          {...register("cep", { required: true })}
        />
        <Input
          type="text"
          label="Estado"
          id="state"
          error={!!errors?.state}
          {...register("state", { required: true })}
        />

        <Button disabled={loading} type="submit" text="Salvar" />
      </form>
    </Layout>
  );
};

export default PacientRegister;
